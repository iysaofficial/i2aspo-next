import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function jenjangoffline() {
  // Data kategori bisa diubah sesuai tahun
const jenjanglist = [
  { label: "Elementary School", href: "https://drive.google.com/file/d/11NyY00T9wiDgnuTh__KX40kdLNFv1s0B/view?usp=sharing", target: "_blank" },
  { label: "Junior High School ", href: "https://drive.google.com/file/d/1ZGmhZxDktJCbFqKTQZNmZHMGkCaNT8BB/view?usp=sharing", target: "_blank" },
  { label: "Senior High School", href: "https://drive.google.com/file/d/1DbFzDYBADxoxOjko-Lr-uycRmlSUV2Ka/view?usp=sharing", target: "_blank" },
  { label: "University", href: "https://drive.google.com/file/d/1lRI4ngv54CulKSV4jX-BXYKOBuuxr9Jq/view?usp=sharing", target: "_blank" },
];

  return (
    <>
      <Head>
        <title>Education Level | I2ASPO</title>
        <meta name="description" content="Category I2ASPO" />
      </Head>
      <Navbar />
      <Breadcrumb
        items={[{ label: "List of Winners 2023" }]}
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
