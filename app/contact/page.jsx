"use client";

export default function Contact() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
        textAlign: "center",
        minHeight: "80vh",
      }}
    >
      <h1 style={{ color: "blue" }}>Contact Us</h1>
      <img
        src="public/assests/Contact.jpg"
        alt="Contact"
        style={{
          display: "block",
          margin: "20px auto",
          width: "300px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      />
      <p style={{ color: "gray", fontSize: "18px", marginTop: "15px" }}>
        Let’s chat over a cup. Reach out to us anytime.
      </p>
      <p style={{ color: "gray", fontSize: "18px" }}>
        “Stay in touch and keep the conversation brewing. Reach out and let’s
        make your next visit even better.”
      </p>
      <div
        style={{
          marginTop: "30px",
          fontSize: "18px",
          color: "gray",
          lineHeight: "1.5",
        }}
      >
        <p>
          <strong>Email:</strong> CafeDay06@gmail.com
        </p>
        <p>
          <strong>Contact:</strong> +91 6380139393
        </p>
        <p>
          <strong>Address:</strong> Fairlands Salem - 636351
        </p>
      </div>
    </div>
  );
}
