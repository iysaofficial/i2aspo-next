import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <section className="about-section">
        <div
          className="mb-5 mt-4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h5
            style={{
              fontWeight: "bold",
              color: "#6c757d",
              marginBottom: "20px",
              fontSize: "2.25rem",
            }}
          >
            Organized by :
          </h5>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "30px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Image
                src="https://ik.imagekit.io/iysaimg/ASSET%20IYSA/logo%20IYSA%20bagus%20(1).png"
                alt="Logo 1"
                width={600}
                height={160}
                style={{ objectFit: "contain" }}
              />
              <Image
                src="https://ik.imagekit.io/iysaimg/ASSET%20IYSA/Logo%20Tengah%20block%20SV%20UGM%20biru%20lock-up%20(1).png"
                alt="Logo 2"
                width={600}
                height={130}
                style={{ objectFit: "contain" }}
              />
            </div>
            <Image
              src="https://ik.imagekit.io/iysaimg/ASSET%20IYSA/prospera%20creative.png"
              alt="Logo 3"
              width={900}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
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
            {/* <div className="about-desc">
              <p>
                This is the reason why IYSA collaborated with the Faculty of
                Science and Data Analytics (FSAD) Institut Teknologi Sepuluh
                Nopember to create a competition with title Indonesia
                International Applied Science Project Olympiad (I2ASPO) that
                invites elementary, middle, high school and university students
                to be able to contribute to producing a product that can be used
                by the wider community.
              </p>
            </div> */}
            <Link href="/contact" legacyBehavior>
              <a className="about-btn">Contact us &nbsp; →</a>
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
