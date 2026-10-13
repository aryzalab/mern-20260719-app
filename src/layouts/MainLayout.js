"use client";

import i18n from "@/i18n/i18n";
import usePreferenceStore from "@/stores/preferencesStore";
import { I18nextProvider } from "react-i18next";

const MainLayout = ({ children }) => {
  const theme = usePreferenceStore((state) => state.theme);

  return (
    <I18nextProvider i18n={i18n}>
      <body className={`min-h-full flex flex-col ${theme}`}>{children}</body>
    </I18nextProvider>
  );
};

export default MainLayout;
