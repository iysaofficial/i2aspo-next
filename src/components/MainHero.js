import Image from "next/image";

export default function MainHero() {
  return (
    <>
      <section className="main-hero">
        <div className="main-hero-bgpattern" />
        <div className="main-hero-container">
          <div className="main-hero-row">
            <div className="main-hero-col">
              <h1 className="main-hero-title">Indonesia International Applied Science Project Olympiad</h1>
              <div className="main-hero-btns">
                <a className="main-hero-btn">
                  Segera Hadir 2025&nbsp; <span aria-hidden>→</span>
                </a>
                <a href="https://drive.google.com/file/d/1QmfxmEzTAIf2Vkzcy3bwzjVzaFTEfi7R/view?usp=sharing" target="_blank" className="main-hero-btn">
                  Buku Panduan 2024 &nbsp; <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <div className="main-hero-img-col">
              <Image
                src="/assets/img/340.png"
                alt="Hero Illustration"
                width={750}
                height={750}
                priority
                className="main-hero-img"
              />
              {/* perubahan */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
