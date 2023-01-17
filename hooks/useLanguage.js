import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useLanguage() {
  const router = useRouter();

  useEffect(() => {
    const l = document.cookie;
    if (l.includes("ar")){
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    } else {
       document.documentElement.lang = "en";
       document.documentElement.dir = "ltr";
    }
  }, [router]);

  const setLanguage = (locale) => {
    // save user preference in the cookie
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;

    router.push(
      {
        pathname: "/",
      },
      undefined,
      {
        scroll: false,
        locale,
      }
    );
  };

  return { setLanguage, locale: router.locale };
}
