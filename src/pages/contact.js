import Head from "next/head";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function Kontak() {
  return (
    <>
      <Head>
        <title>Contact Us | I2ASPO</title>
        <meta name="description" content="I2ASPO Contact Page" />
      </Head>
      <Navbar />
      <Breadcrumb items={[{ label: "Contact" }]} title="CONTACT" />
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Info */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="icon-bg icon-lokasi">
                <span style={{ fontSize: 28, color: "#fff" }}>📍</span>
              </div>
              <div>
                <div className="contact-card-title">Our Location</div>
                <div className="contact-card-desc">
                  Jl. Kemang RT 03 RW 06, West Java 16519, Indonesia.
                </div>
              </div>
            </div>
            <div className="contact-card">
              <div className="icon-bg icon-email">
                <span style={{ fontSize: 28, color: "#fff" }}>📧</span>
              </div>
              <div>
                <div className="contact-card-title">Email Address</div>
                <div className="contact-card-desc">
                  youngscientist.iysa@gmail.com
                  <br />
                  naspoi2aspo.iysa@gmail.com
                </div>
              </div>
            </div>
            <div className="contact-card">
              <div className="icon-bg icon-telp">
                <span style={{ fontSize: 28, color: "#fff" }}>📞</span>
              </div>
              <div>
                <div className="contact-card-title">Contact Us</div>
                <div className="contact-card-desc">0882 1324 8890</div>
              </div>
            </div>
          </div>
          {/* Right Form */}
          <div className="contact-form">
            <div className="contact-form-title">Send Us a Message</div>
            <div className="contact-form-subtitle">
              Have a question?
              <br />
              Let&apos;s start a conversation
            </div>
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" rows={5} />
              <button type="submit">
                Send Message &nbsp; <span style={{ fontSize: 18 }}>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
