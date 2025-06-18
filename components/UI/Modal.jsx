import React, { useState, useEffect } from "react";
import { sendLead } from "../../lib/api/send";

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function Modal({ isOpen, onClose, data }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [openTs, setOpenTs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (isOpen) setOpenTs(Math.floor(Date.now() / 1000));
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const loadRecaptchaScript = () =>
    new Promise((resolve, reject) => {
      if (window.grecaptcha) {
        return resolve();
      }

      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });

  const getRecaptchaToken = () =>
    new Promise((resolve) => {
      if (!window.grecaptcha) return resolve("");
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_KEY, { action: "submit" })
          .then(resolve)
          .catch(() => resolve(""));
      });
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      await loadRecaptchaScript(); // Загружаем скрипт только при отправке
      const recaptchaToken = await getRecaptchaToken();

      await sendLead({
        ...formData,
        make: data?.make,
        model: data?.slug,
        timestamp: openTs,
        body_type: "",
        site: typeof window !== "undefined" ? window.location.href : "",
        recaptchaToken,
      });

      setFeedback({
        type: "success",
        message: "Thank you! We will contact you soon.",
      });
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      setFeedback({ type: "error", message: err.message || "Error sending." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quote-popup-area show" onClick={onClose}>
      <div className="quote-popup" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close" onClick={onClose}>
          ×
        </button>
        <h3>Quick Free Quote{data?.title && ` for ${data.title}`}</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            name="body_type"
            type="text"
            value=""
            onChange={() => {}}
            style={{ display: "none" }}
            tabIndex={-1}
          />

          <button type="submit" className="search-lease" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>

          {feedback && (
            <p className={`form-feedback ${feedback.type}`}>
              {feedback.message}
            </p>
          )}
        </form>

        <div className="sup-down-pp">
          <span>
            <sup>$</sup>0
          </span>
          <div>
            <h5>Down Lease On All Makes/Models!</h5>
            <p>
              *Excludes first month, acquisition fee, new/transfer plates and
              local tax.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
