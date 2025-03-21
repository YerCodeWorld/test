
// For better organization it's better to keep this issues separated.
// Although I may avoid subsections in single pages, for whole apps or systems it might be a good idea
export type NamespaceKey = 'common' | 'home' | 'teachers' | 'auth' // | error | notifications
export type Locale = 'es' | 'en' | 'fr';

export interface I18nConfig {
    defaultLocale: Locale;
    supportedLocales: Locale[];
    defaultNamespace: NamespaceKey;
    namespaces: NamespaceKey[];
}

