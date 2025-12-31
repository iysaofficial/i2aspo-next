import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function KategoriPage() {
  // Data kategori bisa diubah sesuai tahun
const kategorilist = [
  // { label: "Special Award", href: "https://drive.google.com/file/d/1g67gmw9bDk38Rtlm6SqY2oHfdfCjyrv7/view?usp=sharing", target: "_blank" },
  { label: "I2ASPO ONLINE", href: "/daftarpemenang/2025/jenjangonline" },
  { label: "I2ASPO OFFLINE", href: "/daftarpemenang/2025/jenjangoffline" },
];

  return (
    <>
      <Head>
        <title>Category | I2ASPO</title>
        <meta name="description" content="Category I2ASPO" />
      </Head>
      <Navbar />
      <Breadcrumb
        items={[{ label: "List of Winners 2025" }]}
        title="List of Winners"
      />
      <section className="winner-content">
        <h2 className="winner-subtitle">List of Winners</h2>
        <p>Choose based on the Category of the event you are participating in</p>
        <div className="winner-year-list">
          {kategorilist.map((t) =>
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
