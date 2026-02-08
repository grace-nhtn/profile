import { LanguageOption } from '../model/language';

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'vn', label: 'Tiếng Việt', flag: '🇻🇳' },
];

export const DEFAULT_LANGUAGE: LanguageOption['code'] = 'vn';
