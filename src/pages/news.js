import Head from "next/head";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import newsList from "@/lib/data/news.json";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>News | I2ASPO</title>
        <meta name="description" content="I2ASPO News Page" />
      </Head>
      <Navbar />
      <Breadcrumb items={[{ label: "News" }]} title="NEWS" />
      <section className="news-section">
        <h1 className="news-title">News</h1>
        <div className="news-list">
          {newsList.map((news, idx) => (
            <div className="news-card" key={idx}>
              <div className="news-img-wrap">
                <Image
                  src={news.img}
                  alt={news.title}
                  className="news-img"
                  width={400}
                  height={225}
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                  priority={idx === 0}
                />
              </div>
              <div className="news-card-body">
                <div className="news-card-title">{news.title}</div>
                <div className="news-card-desc">{news.desc}</div>
                <Link href={news.link} target="_blank" className="news-card-btn">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
