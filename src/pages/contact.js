import Head from "next/head";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Kontak() {
  useEffect(() => {
      const scriptURL =
      "https://script.google.com/macros/s/AKfycbzdgUOy_s6zjJQTgqXQ7GX3H1_w6TvWq1hsBZgH0mSREWt3qXCKA34-qo74-jfDVbHE/exec";

      const form = document.forms.namedItem("contact");

      if (form) {
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
          await fetch(scriptURL, {
              method: "POST",
              body: new FormData(form),
          });
          alert("Message sent successfully!");
          form.reset();
          } catch (error) {
          console.error("Error:", error);
          alert("Failed to send Message.");
          }
      };

      form.addEventListener("submit", handleSubmit);

      // cleanup listener
      return () => {
          form.removeEventListener("submit", handleSubmit);
      };
      }
  }, []);

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
            <form name="contact">
              <input type="hidden" name="Event" value="I2ASPO" readOnly />
              <input type="text" name="Name" placeholder="Full Name" />
              <input type="email" name="Email" placeholder="Email Address" />
              <textarea name="Message" placeholder="Message" rows={5} />
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
