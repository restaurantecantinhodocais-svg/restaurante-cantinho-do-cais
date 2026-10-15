import { useTranslation } from "react-i18next";
import Layout from "../../components/layout/Layout";

export default function Privacidade() {
  const { t } = useTranslation();

  return (
    <Layout title={t("privacy_title")} showBackButton={true}>
      <p className="mb-4">
        {t("privacy_intro_1")}<strong>Cantinho do Cais</strong>{t("privacy_intro_2")}
      </p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("privacy_h1")}</h3>
      <p className="mb-4">{t("privacy_p1")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("privacy_h2")}</h3>
      <p className="mb-2">{t("privacy_p2")}</p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>{t("privacy_li1")}</li>
        <li>{t("privacy_li2")}</li>
        <li>{t("privacy_li3")}</li>
      </ul>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("privacy_h3")}</h3>
      <p className="mb-4">{t("privacy_p3")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("privacy_h4")}</h3>
      <p className="mb-4">{t("privacy_p4")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("privacy_h5")}</h3>
      <p className="mb-4">{t("privacy_p5")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("privacy_h6")}</h3>
      <p className="mb-4">{t("privacy_p6")}</p>
    </Layout>
  );
}