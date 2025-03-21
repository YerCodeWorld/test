// ./i18ns/index.ts
// creating a provider

import React, { createContext, useContext, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { setUpI18n } from "./i18n";
import type { I18nConfig, Locale, NamespaceKey } from "./types";

import i18n from "i18next";

interface I18nContextType {
    locale: Locale,
    setLocale: (locale: Locale) => Promise<typeof i18n.t | undefined>,
    supportedLocales: Locale[],
    isInitialized: boolean
}

const I18nContext = createContext<I18nContextType>({
    locale: 'es',
    setLocale: async () => undefined,
    supportedLocales: ['es', 'en', 'fr'],
    isInitialized: false,
});

export const I18nProvider: React.FC<{
    // Always good to remember that the ReactNode type is what allows us to do anything with this system
    children: React.ReactNode;
    initialLocale?: Locale;
    config?: Partial<I18nConfig>;

}> = ({ children, initialLocale = 'es', config }) => {

    const [locale, setLocaleState] = useState<Locale>(initialLocale);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
    const [changeLanguageFunc, setChangeLanguageFunc] = useState<(locale: Locale) => Promise<typeof i18n.t | undefined>>(
        async () => undefined
    );

    // Clear useEffect: Set Locale if provided
    useEffect(() => {
        const initI18n = async () => {
            try {
                const i18nInstance = await setUpI18n(config);
                setChangeLanguageFunc(() => i18nInstance.changeLanguage);

                if (initialLocale) {
                    await i18nInstance.changeLanguage(initialLocale);
                }

                setIsInitialized(true);

            } catch (err) {
                console.error("Failed to initialize i18n: ", err);
            }
        };

        // some witchery since i cant do async initI18n
        (async () => {
            await initI18n();
        })().catch(err => {
            console.error('Failed to initialize i18n:', err)
        });

    }, [config, initialLocale]);

    const setLocale = async (newLocale: Locale) => {
        const result = await changeLanguageFunc(newLocale);
        setLocaleState(newLocale);
        return result;
    };

    if (!isInitialized) {
        return <div>Loading translations...(Supposedly)</div>;
    }

    return (
        <I18nContext.Provider
            value={{
                locale,
                setLocale,
                supportedLocales: config?.supportedLocales || ['es', 'en', 'fr'],
                isInitialized
            }}
        >
            <I18nextProvider i18n={i18n}>
                {children}
            </I18nextProvider>
        </I18nContext.Provider>
    );

}

export const useI18n = () => {
    const context = useContext(I18nContext);
    const { t } = useTranslation();

    if (context === undefined) {
        throw new Error('useI18n: useI18n must be used within it. I am a context provider.');
    }

    return {
        t,
        locale: context.locale,
        setLocale: context.setLocale,
        supportedLocales: context.supportedLocales,
        isInitialized: context.isInitialized,
    };
};

export { i18n };
export type { I18nConfig, Locale, NamespaceKey }

