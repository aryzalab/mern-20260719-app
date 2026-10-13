"use client";
import usePreferenceStore from "@/stores/preferencesStore";
import MarkdownPreview from "@uiw/react-markdown-preview";

const ProductDescription = ({ description }) => {
  const theme = usePreferenceStore((state) => state.theme);

  return (
    <MarkdownPreview
      wrapperElement={{
        "data-color-mode": theme,
      }}
      source={description}
      style={{ padding: 16, background: "#0000" }}
    />
  );
};

export default ProductDescription;
