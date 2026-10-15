import { useTranslation } from "react-i18next";
import Layout from "../../components/layout/Layout";

export default function Termos() {
  const { t } = useTranslation();

  return (
    <Layout title={t("terms_title")} showBackButton={true}>
      <p className="mb-4">
        {t("terms_intro_1")}<strong>Cantinho do Cais</strong>{t("terms_intro_2")}
      </p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("terms_h1")}</h3>
      <p className="mb-4">{t("terms_p1")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("terms_h2")}</h3>
      <p className="mb-4">{t("terms_p2")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("terms_h3")}</h3>
      <p className="mb-4">{t("terms_p3")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("terms_h4")}</h3>
      <p className="mb-4">{t("terms_p4")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("terms_h5")}</h3>
      <p className="mb-4">{t("terms_p5")}</p>

      <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">{t("terms_h6")}</h3>
      <p className="mb-4">{t("terms_p6")}</p>
    </Layout>
  );
}