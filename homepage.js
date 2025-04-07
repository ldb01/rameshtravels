import React, { useEffect, useState } from "react";
import "./homepage.css";

const HomePage = () => {
  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const featureCards = [
    {
      title: "Personalized Destination Suggestion",
      description:
        "News write-ups offer a great way to let clients know about new products and services, events, awards and more.",
      image:
        "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Hotel Recommendation",
      description:
        "News write-ups offer a great way to let clients know about new products and services, events, awards and more.",
      image:
        "https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Must Try Foods",
      description:
        "News write-ups offer a great way to let clients know about new products and services, events, awards and more.",
      image:
        "https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Adventure Activities",
      description:
        "News write-ups offer a great way to let clients know about new products and services, events, awards and more.",
      image:
        "https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Local Experiences",
      description:
        "News write-ups offer a great way to let clients know about new products and services, events, awards and more.",
      image:
        "https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < featureCards.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [featureCards.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <a href="https://www.youtube.com/" target="_blank">
        <img
          src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Mountain Landscape"
        />
        </a>
      </section>

      {/* Recommendations Section */}
      <section className="recommendations">
        <h1>Recommended for you</h1>
        <p>
          Discover breathtaking destinations, tailored to your preferences.
          Explore stunning mountains, serene beaches, vibrant cities, and
          hidden gems around the world.
        </p>
        <button className="start-btn">START</button>
      </section>

      {/* Key Features Carousel */}
      <div className="carousel-container">
      <h1 style={{ paddingLeft: "50px" }}>KEY FEATURES</h1>

        <div className="carousel">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className={`feature-card ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <div className="feature-content">
                <div className="feature-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="feature-details">
                  <h2 className="feature-title">{card.title}</h2>
                  <p className="feature-description">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots-container">
          {featureCards.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
