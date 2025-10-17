export default function About() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
        minHeight: "80vh",
      }}
    >
      <h1 style={{ color: "blue", marginBottom: "20px" }}>About Cafe Culture</h1>

      <img
        src="/assests/About.jpg"
        alt="Cafe Culture"
        style={{
          width: "300px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          marginBottom: "30px",
        }}
      />

      <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
        Welcome to Cafe Culture — your cozy spot for the finest brews and
        freshest conversations. We believe in more than just coffee; we
        celebrate the culture, the stories, and the people that come together
        over a cup.
      </p>

      <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6", marginTop: "20px" }}>
        Founded in 2023, our mission is to bring a community together through
        the love of coffee and great company. Whether you're here to work,
        relax, or catch up with friends, Cafe Culture offers the perfect
        ambience with hand-crafted beverages and delicious treats.
      </p>

      <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6", marginTop: "20px" }}>
        Join us for your daily dose of inspiration, flavor, and connection.
        Because at Cafe Culture, every cup tells a story.
      </p>
    </div>
  );
}
