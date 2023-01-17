import useLanguage from "./useLanguage";
import ar from "../Content/ar";
import en from "../Content/en";

export default function useContent() {
  const { locale } = useLanguage();

  return locale === "en" ? en : ar;
}
