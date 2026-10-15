import { useTranslation } from "react-i18next";
import Layout from "../../components/layout/Layout";

export default function Cookies() {
  const { t } = useTranslation();

  return (
    <Layout title={t("cookies_title")} showBackButton={true}>
      <p className="mb-4">
        {t("cookies_intro_1")}<strong>Cantinho do Cais</strong>{t("cookies_intro_2")}
      </p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("cookies_h1")}</h3>
      <p className="mb-4">{t("cookies_p1")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("cookies_h2")}</h3>
      <p className="mb-2">
        {t("cookies_p2_1")}<strong>{t("cookies_p2_strong1")}</strong>{t("cookies_p2_2")}<strong>{t("cookies_p2_strong2")}</strong>:
      </p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>
          <strong>{t("cookies_li1_strong")}</strong>{t("cookies_li1_text")}
        </li>
        <li>
          <strong>{t("cookies_li2_strong")}</strong>{t("cookies_li2_text")}
        </li>
      </ul>
      <p className="mb-4 text-stone-500 text-sm">{t("cookies_p3")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("cookies_h3")}</h3>
      <p className="mb-4">{t("cookies_p4")}</p>
    </Layout>
  );
}