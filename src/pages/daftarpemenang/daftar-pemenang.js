import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

const tahunList = [
  {
    label: "2024",
    href: "https://drive.google.com/drive/folders/1SYwS0pLnshmmybxV0qGWr2BXsdnmr7UA?usp=sharing",
    target: "_blank",
  },
  { label: "2023", href: "/daftarpemenang/2023/kategori" },
  {
    label: "2022",
    href: "https://drive.google.com/file/d/1Pq5vbZkJnHS-pw-GNvK_HuO7lOwhmH4f/view?usp=sharing",
    target: "_blank",
  },
  {
    label: "2021",
    href: "https://drive.google.com/file/d/1U1YCcAAg2tvAGdy1sahfG1T8YdOfUJFD/view?usp=drive_link",
    target: "_blank",
  },
  {
    label: "2020",
    href: "https://drive.google.com/file/d/1eopQ5yJXiS6S9qSzAE57CLk9gjFFLWHv/view?usp=drive_link",
    target: "_blank",
  },
];

export default function DaftarPemenang() {
  return (
    <>
      <Head>
        <title>List of Winners | I2ASPO</title>
        <meta name="description" content="Daftar Pemenang I2ASPO" />
      </Head>
      <Navigation />
      <Breadcrumb
        items={[{ label: "List of Winners" }]}
        title="List of Winners"
      />
      <section className="winner-content">
        <h2 className="winner-subtitle">List of Winners</h2>
        <p>Select by the year of the event you are participating in</p>
        <div className="winner-year-list">
          {tahunList.map((t) =>
            t.target === "_blank" ? (
              <a
                key={t.label}
                href={t.href}
                className="winner-year-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.label}
              </a>
            ) : (
              <Link href={t.href} key={t.label} legacyBehavior>
                <a className="winner-year-btn">{t.label}</a>
              </Link>
            )
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
