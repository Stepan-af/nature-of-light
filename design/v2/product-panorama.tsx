// Figma reference code (condensed) for the product page «Зимний сад Панорама», frame 1002:1522.
// Measurement reference only — never copy as-is. Specs in product-panorama.notes.md.
// Image/icon URLs from the MCP were temporary; originals are in src/content/products/zimniy-sad-panorama/
// and icons in src/assets/product/icons/.

// 1002:1538 «Первый экран»
export const Hero = () => (
  <div className="bg-[#f6f6f4] flex flex-col gap-[28px] items-center pb-[72px] pt-[28px] px-[84px]">
    <p className="text-[#717770] text-[11px]">Главная / Каталог / Зимние сады</p>
    <div className="flex gap-[16px] items-start w-full">
      <div className="flex gap-[16px] h-[684px] w-[900px]">{/* Галерея */}
        <div className="flex flex-col gap-[12px] w-[120px]">{/* 6× Миниатюра h-[104px] w-[120px] rounded-[8px] */}</div>
        <div className="flex flex-1 flex-col h-full justify-between p-[20px] rounded-[14px]">{/* Главное фото */}
          <div className="bg-[rgba(17,16,24,0.8)] px-[12px] py-[8px] rounded-[999px] text-[10px] text-white">ЗИМНИЙ САД</div>
          <div className="bg-[rgba(255,255,255,0.87)] flex gap-[8px] px-[12px] py-[8px] rounded-[999px] text-[11px]">{/* camera 14px */}1 / 6</div>
        </div>
      </div>
      <div className="bg-white flex flex-1 flex-col gap-[24px] h-[684px] p-[38px] rounded-[14px] shadow-[0px_12px_36px_0px_rgba(17,16,24,0.07)]">
        <p className="font-['Playfair_Display:Bold'] leading-[52.8px] text-[#111018] text-[48px] tracking-[-1px]">Зимний сад «Панорама»</p>
        <p className="leading-[1.55] text-[#717770] text-[15px]">Светопрозрачная пристройка с панорамным остеклением для отдыха круглый год. Проектируем под архитектуру вашего дома.</p>
        <div className="flex flex-col gap-[5px]">
          <p className="font-['JetBrains_Mono'] text-[#717770] text-[11px] tracking-[1px] uppercase">СТОИМОСТЬ ПРОЕКТА</p>
          <p className="font-['Playfair_Display:Bold'] text-[#111018] text-[38px]">от 470 000 ₽</p>
        </div>
        <div className="flex flex-col text-[12px] w-full">
          {/* 3× Параметр: border-t border-[#d8ddd7] py-[13px] justify-between; label #717770, value semibold #111018 */}
        </div>
        <div className="border border-[#26902b] h-[38px] px-[18px] py-[8px] rounded-[24px] text-[#757575] text-[13px] font-medium">Оставить Заявку и Расчитать стоимость →</div>
        <p className="text-[#717770] text-[12px]">Замер и визуализацияю. Гарантия на конструкцию- 5 лет</p>
      </div>
    </div>
  </div>
);

// 1002:1575 «Преимущества»
export const Advantages = () => (
  <div className="bg-[#111018] flex flex-col gap-[44px] items-center px-[84px] py-[82px]">
    <p className="font-['Playfair_Display:Bold'] leading-[52px] text-[42px] text-white tracking-[-1px]">Пространство, в котором больше света</p>
    <div className="flex gap-[18px] w-full">
      {/* 4× Преимущество: border-t border-[rgba(255,255,255,0.15)] flex-1 flex-col gap-[16px] pr-[24px] pt-[24px];
          icon 28px; title Playfair Bold 22 white; text 13/1.5 rgba(255,255,255,0.6) */}
    </div>
  </div>
);

// 1002:1594 «Подробности»
export const Story = () => (
  <div className="bg-[#f6f6f4] flex flex-col gap-[78px] px-[84px] py-[104px]">
    <div className="flex gap-[16px] items-center w-full">
      <div className="h-[600px] rounded-[14px] w-[820px]" />
      <div className="flex flex-1 flex-col gap-[30px]">
        <div className="flex flex-col gap-[20px]">
          <p className="leading-[52px] text-[#1a1a1a] text-[42px] tracking-[-1px]">Ваш сад становится частью дома</p>
          <p className="leading-[1.55] text-[#717770] text-[15px]">Панорамное остекление стирает границу…</p>
        </div>
        <p className="font-['Playfair_Display:Italic'] leading-[1.25] text-[#1a1a1a] text-[24px]">Мы проектируем не пристройку, а новую любимую комнату дома</p>
        <div className="border border-[#26902b] h-[38px] px-[18px] rounded-[24px] text-[13px]">Смотреть портфолио →</div>
      </div>
    </div>
    <div className="flex gap-[16px] items-center w-full">
      <div className="flex flex-1 flex-col gap-[28px]">
        {/* title + text, then Факты: flex gap-[42px]; value Playfair Bold 32 black, label 11px #717770 */}
      </div>
      <div className="h-[540px] rounded-[14px] w-[820px]" />
    </div>
  </div>
);

// 1002:1617 «Характеристики»
export const Details = () => (
  <div className="bg-[#eceeeb] flex gap-[80px] justify-center px-[84px] py-[104px]">
    <div className="flex flex-col gap-[32px] w-[520px]">
      {/* title + text (gap 20); image h-[280px] w-[520px] rounded-[14px]; previews gap-[12px]: 181×137 and 185×141 rounded-[20px] opacity-60 */}
    </div>
    <div className="flex flex-1 flex-col text-[13px]">
      {/* 8× Строка: border-t border-[#d8ddd7] py-[21px]; label w-[230px] #717770; value w-[470px] semibold #111018 */}
    </div>
  </div>
);

// 1002:1649 «Комплектация»
export const Process = () => (
  <div className="bg-white flex flex-col gap-[52px] px-[84px] py-[104px]">
    <p className="leading-[52px] text-[#1a1a1a] text-[42px] tracking-[-1px]">От эскиза до готового пространства</p>
    <div className="flex gap-[16px] w-full">
      <div className="h-[470px] rounded-[14px] w-[720px]" />
      <div className="flex flex-1 flex-col">
        {/* 4× Этап: border-t border-[#d8ddd7] flex gap-[18px] py-[24px];
            number Playfair Regular 18 #2e7d32 w-[32px]; title Playfair Bold 22 black; text 13/1.5 #717770 (gap 7) */}
      </div>
    </div>
  </div>
);

// 1002:1680 «Вопросы и ответы»
export const Faq = () => (
  <div className="bg-[#f6f6f4] flex gap-[32px] justify-center px-[84px] py-[104px]">
    <div className="flex flex-col gap-[20px] w-[360px]">
      <p className="font-['Inter:Bold'] text-[36px] text-[#1e1e1e]">О зимнем саде - коротко</p>
      <p className="leading-[24px] text-[16px] text-[#757575]">Не нашли ответа? Расскажите нам о проекте - архитектор свяжется с вами и всё объяснит.</p>
    </div>
    <div className="flex flex-col gap-[12px] w-[740px]">
      {/* FAQ part: bg-white p-[24px] rounded-[20px] (open: rounded-[24px]); question 16/20 #757575; answer ul 14/18 #1e1e1e; arrow 24px */}
    </div>
  </div>
);

// 1002:1712 «Финальный призыв»
export const Finale = () => (
  <div className="bg-[#111018] h-[520px] px-[84px] py-[76px] relative">
    {/* Фон: photo object-cover; Затемнение: bg-[rgba(7,16,11,0.71)] inset-0 */}
    <p className="font-['Playfair_Display:Bold'] leading-[64px] text-[60px] text-white tracking-[-1.5px] w-[840px]">Создадим место, куда хочется возвращаться</p>
  </div>
);
