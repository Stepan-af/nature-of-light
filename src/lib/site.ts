import rawSettings from '@/content/data/settings.json';

/*
 * Shape of src/content/data/settings.json. Sveltia CMS drops empty optional
 * fields when saving, so everything the editor may leave blank is optional.
 */
export interface Settings {
  siteName: string;
  tagline: string;
  description: string;
  foundedYear: number;
  phone: string;
  email: string;
  address: { street: string; city: string; note?: string };
  hours?: string;
  hoursNote?: string;
  social: { telegram?: string; whatsapp?: string; vk?: string };
  stats: { value: string; label: string }[];
  rating: { value: string; label: string };
  legal: {
    company: string;
    fullName?: string;
    inn?: string;
    kpp?: string;
    ogrn?: string;
    legalAddress?: string;
    director?: string;
    bank?: string;
    bik?: string;
    account?: string;
    corrAccount?: string;
  };
}

export const settings: Settings = rawSettings;

/** `tel:` link from a formatted phone number. */
export const phoneHref = (phone: string = settings.phone) => `tel:${phone.replace(/[^\d+]/g, '')}`;

const rub = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });

/** 45000 → "45 000 ₽" (with non-breaking spaces). */
export const formatPrice = (value: number) => `${rub.format(value)} ₽`;

/** 45000 → "от 45 000 ₽". */
export const formatPriceFrom = (value: number) => `от ${formatPrice(value)}`;

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', href: '/catalog/' },
  { label: 'Портфолио', href: '/portfolio/' },
  { label: 'Услуги', href: '/uslugi/' },
  { label: 'Контакты', href: '/kontakty/' },
];

/** True when `href` is the current page or one of its ancestors (except home). */
export const isActive = (href: string, pathname: string) =>
  href === '/' ? pathname === '/' : pathname.startsWith(href);
