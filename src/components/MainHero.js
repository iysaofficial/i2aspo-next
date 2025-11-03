import Image from "next/image";
import Link from "next/link";

export default function MainHero() {
  return (
    <>
      <section className="main-hero">
        <div className="main-hero-bgpattern" />
        <div className="main-hero-container">
          <div className="main-hero-row">
            <div className="main-hero-col">
              <h1 className="main-hero-title">
                Indonesia International Applied Science Project Olympiad
              </h1>
              <div className="main-hero-btns">
                <Link href="/registration/homeregist" legacyBehavior>
                <a className="main-hero-btn">
                  Open Registration&nbsp;<span aria-hidden>→</span>
                </a>
                </Link>
                <a
                  href="https://drive.google.com/file/d/1qbAW5-sQ_V0Lw3H-a3DopNCjT4ebtDER/view?usp=sharing"
                  target="_blank"
                  className="main-hero-btn"
                >
                  Guide Book 2025&nbsp;<span aria-hidden>→</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1xhm1O3RwZKEj4WFhLZHvOmqx4aJXwURB/view?usp=sharing"
                  target="_blank"
                  className="main-hero-btn"
                >
                  Trip & Tour Package 2025&nbsp;<span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <div className="main-hero-img-col">
              <Image
                src="/assets/img/hero.png"
                alt="Hero Illustration"
                width={750}
                height={750}
                priority
                className="main-hero-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
