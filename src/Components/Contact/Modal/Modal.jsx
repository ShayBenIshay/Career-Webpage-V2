"use client";

import { useState, useRef, useEffect } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, title, backgroundColor, message }) => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      return {
        name: localStorage.getItem("contactFormName") || "",
        email: localStorage.getItem("contactFormEmail") || "",
      };
    }
    return { name: "", email: "" };
  });
  const messageRef = useRef(null);

  useEffect(() => {
    if (isOpen && messageRef.current) {
      messageRef.current.focus();
      messageRef.current.setSelectionRange(
        messageRef.current.value.length,
        messageRef.current.value.length
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (typeof window !== "undefined") {
      localStorage.setItem(
        `contactForm${name.charAt(0).toUpperCase() + name.slice(1)}`,
        value
      );
    }
  };

  const validateForm = (formData) => {
    const newErrors = {};
    const name = formData.get("name");
    const clientMessage = formData.get("message");
    const email = formData.get("email");

    if (name.length < 1) newErrors.name = "Name is required";
    if (clientMessage.length < 1) newErrors.message = "Message is required";
    if (!email) newErrors.email = "Email is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult("");
    setErrors({});

    const formData = new FormData(e.target);

    if (!validateForm(formData)) {
      setIsLoading(false);
      return;
    }

    try {
      console.log(process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
      if (!process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
        throw new Error("Web3Forms API key is not configured");
      }

      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
        setTimeout(onClose, 2000);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor }}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h3>{title}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className={errors.name ? "input-error" : ""}
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={errors.email ? "input-error" : ""}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <textarea
              ref={messageRef}
              name="message"
              placeholder="Message"
              required
              className={errors.message ? "input-error" : ""}
              defaultValue={message}
            />
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "SEND"}
          </button>
          {result && (
            <div
              className={`result-message ${
                result.includes("Error") ? "error" : "success"
              }`}
            >
              {result}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;
