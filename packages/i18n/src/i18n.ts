// imports
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import homeEs from '../src/locales/es/home';

import type { I18nConfig, Locale, NamespaceKey } from "./types";


// We are setting the default language to be spanish and passing the namespaces manually, which differ from the
// types declaration in types.ts
const defaultConfig: I18nConfig = {
    defaultLocale: 'es',
    supportedLocales: ['es', 'en'] ,
    namespaces: ['common', 'home', 'teachers', 'auth'],
    defaultNamespace: 'home'  // Update the actual use of this when implemented
};

// In the official implementation, one could see that this is the place where the translations are hard-coded.
// With out system we suppose we are using the same logic but adding an extra JSON layer by having different modules ("Namespaces")
const resources = {
    es: {
        common: homeEs
        // Additional modules (translations) should go here, but we are actually going to load them dynamically
    }
}

// Load translations
// Seems like a nice approach for dynamically loading the required translation

const localLocaleBundle = async (locale: Locale, ns: NamespaceKey) => {

    // Edge-case: If the default function is already set, just return.
    // Resulted to be a scam. Ended up in a bug where the default translations did not load
    // if (locale === 'es') return;
    // better add if (locale === fr´) return notify() -> Maybe a link to send an implementation request

    try {
        // CUSTOM TYPE: FILE
        const module = await import(`./locales/${locale}/${ns}.ts`);
        // CUSTOM TYPE: JSON STRING
        return module.default;
    } catch (error) {
        console.error(error);
        console.log("Could not get the translation module. Maybe an internet issue? ")
        return null;
    }
};

// Set up i18n
export async function setUpI18n(customConfig?: Partial<I18nConfig>) {
    // Dynamically change language config
    const config = { ...defaultConfig, ...customConfig };

    await i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources,
            lng: config.defaultLocale,
            fallbackLng: config.defaultLocale,
            supportedLngs: config.supportedLocales,
            ns: config.namespaces,
            defaultNS: config.defaultNamespace,
            interpolation: {
                escapeValue: false  // ??
            },
            detection: {
                order: ['localStorage', 'navigator'],
                caches: ['localStorage']
            }
        });


    const changeLanguage = async (locale: Locale) => {
        // No idea if this could be a case, but letting it here just in case
        // I explain myself: We hard-code the available language, it's not like someone is going to add a new one from nowhere
        if (!config.supportedLocales.includes(locale)) {
            return;
        }

        // Loading all modules seems like a nice fake performance idea
        for (const ns of config.namespaces) {
            if (!i18n.hasResourceBundle(locale, ns)) {
                const bundle = await localLocaleBundle(locale, ns);
                if (bundle) {
                    i18n.addResourceBundle(locale, ns, bundle);
                }
            }
        }

        return i18n.changeLanguage(locale);
    }

    return {
        i18n,
        t: i18n.t,
        changeLanguage
    };
}

