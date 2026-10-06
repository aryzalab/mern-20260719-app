"use client";

import usePreferenceStore from "@/stores/preferencesStore";

const MainLayout = ({ children }) => {
  const theme = usePreferenceStore((state) => state.theme);

  return (
    <body className={`min-h-full flex flex-col ${theme}`}>{children}</body>
  );
};

export default MainLayout;
