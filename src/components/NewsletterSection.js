import { useEffect } from "react";

export default function NewsletterSection() {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwfw1dAhzyY6p6crVCCuoEXzb_E7hBOi8cYuIBu_-JZzz2a25h-tCvT6Xd3dUH9Mx2fQA/exec";

      const form = document.forms.namedItem("home-newsletter");

      if (form) {
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
          await fetch(scriptURL, {
              method: "POST",
              body: new FormData(form),
          });
          alert("Data sent successfully!");
          form.reset();
          } catch (error) {
          console.error("Error:", error);
          alert("Failed to send data.");
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
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-header">Newsletter Subscribe</div>
        <h2 className="newsletter-title">
          Subscribe Our Newsletter To <br />
          Get More Update
        </h2>
        <div className="newsletter-underline"></div>
        <form className="newsletter-form" name="home-newsletter">
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter Your Email Address"
            name="Email"
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