import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logic submit newsletter di sini
    alert("Terima kasih telah berlangganan!");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-header">Newsletter Subscribe</div>
        <h2 className="newsletter-title">
          Subscribe Our Newsletter To <br />
          Get More Update
        </h2>
        <div className="newsletter-underline"></div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="newsletter-btn" type="submit">
            Subscribe Now &nbsp; <span style={{ fontSize: 18 }}>→</span>
          </button>
        </form>
        <div className="newsletter-desc">
          On the other hand, we denounce with righteous
        </div>
      </div>
    </section>
  );
}