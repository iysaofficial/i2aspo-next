import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="i2aspo-footer">
      <div className="footer-main">
        <div className="footer-col">
          <h4 className="footer-title">About I2ASPO</h4>
          <p className="footer-desc">
            Research is becoming increasingly important as it can create
            solutions to current problems.
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=100063979907207"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="footer-social-btn"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <circle cx="11" cy="11" r="11" fill="none" />
                <path
                  d="M13.5 11H12v5H10v-5H9v-2h1V8.5A2.5 2.5 0 0 1 12.5 6h1V8h-1A.5.5 0 0 0 12 8.5V9h1.5v2Z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UC6-Hq4AnYbwiQWz7XemEwKw"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
              className="footer-social-btn"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <circle cx="11" cy="11" r="11" fill="none" />
                <path d="M9 8.5v5l4-2.5-4-2.5Z" fill="#fff" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <Link href="/faq" legacyBehavior>
            <a className="footer-link">
              <span className="footer-arrow">›</span> FAQ
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="footer-link">
              <span className="footer-arrow">›</span> CONTACT
            </a>
          </Link>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Guide Book</h4>
          <Link href="" legacyBehavior>
            <a
              className="footer-link"
              target="_blank"
              href="https://drive.google.com/file/d/1qbAW5-sQ_V0Lw3H-a3DopNCjT4ebtDER/view?usp=sharing"
              rel="noopener"
            >
              <span className="footer-arrow">›</span> Guide Book 2025
            </a>
          </Link>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <div className="footer-contact">
            <div>
              <span className="footer-icon">📍</span>
              <span>Jl. Kemang RT 03 RW 06, Jawa Barat 16519, Indonesia.</span>
            </div>
            <div>
              <span className="footer-icon">✉️</span>
              <span>youngscientist.iysa@gmail.com</span>
            </div>
            <div>
              <span className="footer-icon">📞</span>
              <span>+62 882-1324-8890</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <Image
            src="/assets/img/i2aspo-logo.png"
            alt="I2ASPO"
            width={150}
            height={100}
            priority
          />
        </div>
        <div className="footer-copyright">
          © 2022 I2ASPO. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
