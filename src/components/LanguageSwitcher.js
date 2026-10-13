"use client";

import i18n from "@/i18n/i18n";
import usePreferenceStore from "@/stores/preferencesStore";
import { useEffect } from "react";

const LanguageSwitcher = () => {
  const { changeLanguage } = usePreferenceStore.getState();

  const language = usePreferenceStore((state) => state.language);

  async function updateLanguage() {
    await i18n.changeLanguage(language);
  }

  useEffect(() => {
    updateLanguage();
  }, [language]);

  return (
    <select
      defaultValue={language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value={"en"}>EN</option>
      <option value={"ne"}>NE</option>
      <option value={"fr"}>FR</option>
    </select>
  );
};

export default LanguageSwitcher;
