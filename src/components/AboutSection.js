import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-illustration-col">
            <Image
              src="/assets/img/app/about.png"
              alt="About I2ASPO"
              className="about-illustration-img about-animate"
              width={200}
              height={200}
              priority
            />
            <div className="about-illustration-glow"></div>
          </div>
          <div className="about-text-col">
            <h2 className="about-title">
              <span className="">About I2ASPO</span>
            </h2>
            <div className="about-subtitle">
              <span className="about-subtitle-highlight">Preliminary</span>
            </div>
            <div className="about-desc">
              <p>
                The world changes today so fast. This change provides various
                kinds of things that require humans to adapt to the changes that
                occur. Especially in the field of research. Research is quite
                important because it is able to create solutions to problems
                that occur today.
              </p>
            </div>
            <div className="about-desc">
              <p>
                This is the reason why IYSA collaborated with the Faculty of
                Science and Data Analytics (FSAD) Institut Teknologi Sepuluh
                Nopember to create a competition with title Indonesia
                International Applied Science Project Olympiad (I2ASPO) that
                invites elementary, middle, high school and university students
                to be able to contribute to producing a product that can be used
                by the wider community.
              </p>
            </div>
            <Link href="/contact" legacyBehavior>
              <a className="about-btn">
                Contact us &nbsp; →
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-illustration-col">
            <Image
              src="/assets/img/app/docs.jpg"
              alt="Purpose I2ASPO"
              className="about-illustration-img about-animate-y"
              width={350}
              height={350}
              priority
            />
            <div className="about-illustration-glow"></div>
          </div>
          <div className="about-text-col">
            <h2 className="about-title">
              <span className="about-title">Purpose</span>
            </h2>
            <div className="about-desc">
              <p>
                1. Challenging Indonesian students / students to create a work
                that can be applied and directly beneficial to society.
              </p>
            </div>
            <div className="about-desc">
              <p>
                2. Inviting Indonesian students / students to be more sensitive
                to the problems in their respective environments and find
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
