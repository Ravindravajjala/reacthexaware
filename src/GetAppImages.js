import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import whatsapp from "../src/Images/whatsapp.jpeg"; 
import nykaa from "../src/Images/nykaa.jpeg";
import logo from "../src/Images/logo.png.png";
import flipkart from "../src/Images/flipkart.jpeg";
import amazon from "../src/Images/amazon.jpeg";
import reliance from "../src/Images/reliance.jpeg";

// Create an array of imported images
const importedImages = [nykaa, whatsapp, flipkart,amazon, reliance];

function GetAppImages() {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  async function fetchApps() {
    try {
      const response = await fetch("https://localhost:44382/api/App/GetAllApps");
      const jsonData = await response.json();
      setApps(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApps();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
          textAlign: "center", // Center text horizontally
          margin: "20px 0", // Add some margin for spacing
        }}
      >
        <h3>We Value Your Feedback</h3>
        <button
  onClick={() => navigate(`/AddNewReview1`)} // Navigate to AddNewReview page
  style={{
    marginTop: "10px",
    backgroundColor: "#007bff", // Background color
    alignItems: "center",
    color: "#fff", // Text color
    border: "none", // Remove border
    borderRadius: "9px", // Rounded corners
    padding: "10px 20px", // Padding
    cursor: "pointer", // Change cursor to pointer on hover
    fontSize: "16px", // Font size
  }}
>
  Add Review
</button>

      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {apps.map((item, i) => (
          <div
            key={i}
            style={{
              border: "3px solid pink",
              backgroundColor: "lavender",
              color: "brown",
              width: "200px",
              height: "200px", // Adjusted height to accommodate the button
              margin: "10px",
              padding: "3px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "4px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column", // Add this to align content vertically
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={importedImages[i % importedImages.length]} // Use imported images based on index
              alt={item.appName}
              style={{ width: "100%", height: "100%", objectFit: "cover" }} // Set the image to cover the container
            />
          </div>
        ))}
      </div>

      <div>
        <button style={{ position: "absolute", top: "20px", left: "40px" }}>
          <Link to="/Navbar">Back</Link>
        </button>
      </div>
    </div>
  );
}

export default GetAppImages;