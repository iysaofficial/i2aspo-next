import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function jenjangoffline() {
  // Data kategori bisa diubah sesuai tahun
const jenjanglist = [
  { label: "Elementary", href: "https://drive.google.com/file/d/1vF6DlIVOFbV1Mrpcuu2UJ2na5gnWCmNO/view?usp=sharing", target: "_blank" },
  { label: "Secondary", href: "https://drive.google.com/file/d/1pqVJQLj0gvoSGnuKTlM72ECzJ9w6YY7E/view?usp=sharing", target: "_blank" },
  { label: "University", href: "https://drive.google.com/file/d/1DZwuGw_yZA7hUgrUBRcBSUTf7iG2rHao/view?usp=sharing", target: "_blank" },
];

  return (
    <>
      <Head>
        <title>Education Level | I2ASPO</title>
        <meta name="description" content="Category I2ASPO" />
      </Head>
      <Navbar />
      <Breadcrumb
        items={[{ label: "List of Winners 2025" }]}
        title="List of Winners"
      />
      <section className="winner-content">
        <h2 className="winner-subtitle">List of Winners</h2>
        <p>Select based on the Education Level of the Offline event you are participating in</p>
        <div className="winner-year-list">
           {jenjanglist.map((t) =>
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
