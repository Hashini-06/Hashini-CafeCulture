"use client";

import React, { useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const names = data.slice(0, 10).map((user) => ({
          id: user.id,
          name: user.name,
        }));
        setUsers(names);
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { customerName, phoneNumber, feedback, rating };
    setSubmittedData([...submittedData, newEntry]);

    // Clear form
    setCustomerName("");
    setPhoneNumber("");
    setFeedback("");
    setRating("");
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
        maxWidth: "600px",
        margin: "0 auto",
        minHeight: "80vh",
        textAlign: "center",
      }}
    >
      <img
        src="/assests/User.jpg"
        alt="User"
        style={{ width: "150px", margin: "0 auto 20px" }}
      />
      <h1>User List</h1>

      <button
        onClick={fetchUsers}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          backgroundColor: "brown",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get Users
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "5px" }}>
            {user.name}
          </li>
        ))}
      </ul>

      <hr style={{ margin: "40px 0" }} />

      <h2>Customer Feedback Form</h2>

      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          placeholder="Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          rows={4}
        ></textarea>
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "brown",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit Feedback
        </button>
      </form>

      {submittedData.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h3>Submitted Feedback</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {submittedData.map((entry, idx) => (
              <li
                key={idx}
                style={{
                  border: "1px solid #ccc",
                  padding: "15px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <p>
                  <strong>Name:</strong> {entry.customerName}
                </p>
                <p>
                  <strong>Phone:</strong> {entry.phoneNumber}
                </p>
                <p>
                  <strong>Feedback:</strong> {entry.feedback}
                </p>
                <p>
                  <strong>Rating:</strong> {entry.rating}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
