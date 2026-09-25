# Публикация сайта

Сайт полностью статический (Astro собирает HTML в `dist/`), серверного кода нет. Форм на сайте нет — связь только через WhatsApp и Telegram, поэтому сайт не собирает персональные данные. Подходит любой хостинг с Apache.

```
git push в main  ──►  GitHub Actions: npm ci → npm run build (astro check + astro build)  ──FTPS──►  хостинг
(или сохранение в /admin/)                   .github/workflows/deploy.yml
```

## Требования к хостингу

- **Apache 2.4** с поддержкой `.htaccess` (`AllowOverride All` или хотя бы `FileInfo Indexes Options AuthConfig`) и модулями `mod_rewrite`, `mod_headers`, `mod_expires`, `mod_deflate` (желательно `mod_brotli`). Все секции в `.htaccess` обёрнуты в `<IfModule>`, но без `mod_rewrite` не будет редиректов на `https`/слеш.
- **FTPS** (FTP с TLS) или SSH/SFTP. Обычный FTP без шифрования — только если другого нет (`protocol: ftp` в workflow).
- Бесплатный **SSL-сертификат** (Let's Encrypt) — есть почти у всех хостингов; без HTTPS не работает редактор `/admin/`.
- Хранилище ~200 МБ с запасом (картинки в нескольких размерах).

Если на хостинге nginx без Apache — перенесите правила из `public/.htaccess` в конфиг nginx (редиректы, кэш, заголовки).

## Timeweb (текущий хостинг)

- **Тестовый домен:** `https://nature-of-lights.cc716168.tw1.ru` — переменные репозитория `SITE_URL=https://nature-of-lights.cc716168.tw1.ru`, `NOINDEX=true`, `DEPLOY_ENABLED=true`, `FTP_PROTOCOL=ftp`.
- **Папка сайта:** панель → «Сайты» → у сайта, к которому привязан поддомен, указана директория (обычно `nature-of-lights/public_html`). В `FTP_SERVER_DIR` — этот путь относительно домашней папки, со слешем в конце: `nature-of-lights/public_html/`. Удалите из папки стандартный `index.html` заглушки Timeweb.
- **FTP:** хост и логин — панель → дашборд → блок «Доступ по FTP» (хост вида `vhXXX.timeweb.ru`). Лучше создать отдельного пользователя: «Пользователи ПУ/FTP» → доступ «Файлы по FTP», ограничить директорией сайта. FTPS на shared-хостинге Timeweb нет (ошибка `530 Please login with USER and PASS` сразу после подключения) — задайте переменную репозитория `FTP_PROTOCOL=ftp` или перейдите на rsync по SSH (раздел ниже, рекомендуется).
- **SSL:** «SSL-сертификаты» → бесплатный Let's Encrypt для поддомена. Без HTTPS не работает вход в `/admin/`.
- При переходе на боевой домен: `SITE_URL=https://prirodasveta.ru`, `NOINDEX=false`, `site_url` в `public/admin/config.yml`, блок HTTPS в `.htaccess`.

## Первая настройка

1. **Репозиторий.** Создайте приватный репозиторий на GitHub и отправьте туда проект (ветка `main`).
2. **Домен.** Если домен не `prirodasveta.ru`, замените его:
   - переменная репозитория `SITE_URL` (по умолчанию в `astro.config.mjs` — `https://prirodasveta.ru`); `robots.txt` и `sitemap` строятся из неё автоматически;
   - для тестового домена — ещё переменная `NOINDEX=true` (закрывает сайт от индексации);
   - `public/.htaccess` → блок «HTTPS + canonical host»;
   - `public/admin/config.yml` → `site_url`.
3. **Секреты GitHub** (Settings → Secrets and variables → Actions → *New repository secret*):

   | Секрет | Пример | Где взять |
   |---|---|---|
   | `FTP_SERVER` | `ftp.hosting.ru` | панель хостинга → FTP |
   | `FTP_USERNAME` | `u1234567` | там же |
   | `FTP_PASSWORD` | `••••••` | там же (лучше отдельный FTP-аккаунт только на папку сайта) |
   | `FTP_SERVER_DIR` | `/public_html/` или `/www/prirodasveta.ru/` | корень сайта на сервере, **со слешем в конце** |

   *Переменные* (вкладка Variables):
   - `DEPLOY_ENABLED` = `true` — **обязательно**, иначе workflow только собирает сайт и ничего не загружает (так сделано, чтобы до выбора хостинга push-и не падали с ошибкой).
   - `SITE_URL` = `https://prirodasveta.ru` — необязательно.

4. **Первый деплой.** Actions → Deploy → *Run workflow* (или любой push в `main`). Сборка и загрузка занимают 2–4 минуты; первая загрузка — дольше (все файлы). Дальше загружаются только изменённые файлы: action хранит на сервере файл `.ftp-deploy-sync-state.json` — не удаляйте его (иначе следующий деплой перезальёт всё).
5. **HTTPS.** Выпустите сертификат в панели хостинга, проверьте, что `https://домен/` открывается, затем раскомментируйте в `public/.htaccess` блок «HTTPS + canonical host» (и, через пару недель стабильной работы, строку HSTS). Закоммитьте — изменение уедет автоматически.
6. **Редактор.** Впишите имя репозитория в `public/admin/config.yml` (`repo: Stepan-af/nature-of-light`) — см. `docs/cms.md`.
7. **Поисковики.** Добавьте сайт в Яндекс Вебмастер и Google Search Console, укажите `https://домен/sitemap-index.xml`.

## Как проходит публикация

- Любой коммит в `main` (от разработчика или из `/admin/`) запускает workflow.
- `npm run build` запускает `astro check`, `astro build` и `scripts/prune-unused-assets.mjs` (удаляет из `dist/_astro` файлы, на которые не ссылается ни одна страница — Astro генерирует лишние варианты картинок, а по FTP каждый файл грузится отдельно) — если в контенте ошибка (например, не заполнено обязательное поле или удалена картинка), сборка упадёт, **сайт не изменится**, а на вкладке Actions будет красный крестик с описанием ошибки.
- Два деплоя одновременно не выполняются (очередь `concurrency`).
- Повторить деплой: Actions → Deploy → последний запуск → *Re-run jobs*.

## rsync по SSH (рекомендуется)

Быстрее и безопаснее FTP: одно сжатое зашифрованное соединение, передаются только изменившиеся файлы. Шаг уже есть в workflow, включается переменной `DEPLOY_METHOD=rsync`.

1. **Включить SSH** (Timeweb: дашборд → «Статус сервисов» → SSH). Работает только для основного пользователя аккаунта (логин вида `cc716168`), хост — `vhXXX.timeweb.ru`, порт 22.
2. **Ключ для деплоя** (на своём компьютере, без пароля):
   ```bash
   ssh-keygen -t ed25519 -N "" -C "github-deploy" -f ~/.ssh/nature_of_lights_deploy
   ssh-copy-id -i ~/.ssh/nature_of_lights_deploy.pub cc716168@vhXXX.timeweb.ru   # спросит пароль от панели
   ssh -i ~/.ssh/nature_of_lights_deploy cc716168@vhXXX.timeweb.ru 'pwd && ls nature-of-lights'   # проверка
   ```
   Если `ssh-copy-id` недоступен — добавьте содержимое `.pub` строкой в `~/.ssh/authorized_keys` на сервере через файловый менеджер (права: папка `.ssh` — 700, файл — 600).
3. **Секреты GitHub:**

   | Секрет | Значение |
   |---|---|
   | `SSH_HOST` | `vhXXX.timeweb.ru` |
   | `SSH_USER` | `cc716168` |
   | `SSH_PRIVATE_KEY` | содержимое `~/.ssh/nature_of_lights_deploy` (приватный ключ целиком) |
   | `SSH_KNOWN_HOSTS` | вывод `ssh-keyscan vhXXX.timeweb.ru` (необязательно, но защищает от подмены сервера) |
   | `DEPLOY_PATH` | `nature-of-lights/public_html/` (от домашней папки, со слешем в конце) |

   Через GitHub CLI: `gh secret set SSH_PRIVATE_KEY < ~/.ssh/nature_of_lights_deploy` и т. д.
4. **Переменная** `DEPLOY_METHOD=rsync`. FTP-секреты после проверки можно удалить.

`rsync --delete` удаляет на сервере всё, чего нет в сборке — не кладите в папку сайта ничего постороннего.

## Что проверить после первого деплоя

- `https://домен/` и несколько внутренних страниц открываются; `https://домен/catalog` редиректит на `/catalog/`.
- `https://домен/несуществующая/` отдаёт страницу 404 со статусом 404.
- `https://домен/admin/` открывает редактор; в ответе есть заголовок `X-Robots-Tag: noindex`.
- `https://домен/robots.txt`, `https://домен/sitemap-index.xml` доступны.
- Заголовки: `curl -I https://домен/_astro/<любой файл>` → `Cache-Control: public, max-age=31536000, immutable`; HTML → `max-age=0, must-revalidate`.
- Кнопки WhatsApp и Telegram на `/kontakty/` открывают чаты с менеджером.
- Проверка разметки: https://search.google.com/test/rich-results и https://validator.schema.org/.
