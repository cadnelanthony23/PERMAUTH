import React, { useEffect, useState, useRef } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const REVIEWS = [
  {
    initials: "SM",
    name: "Sarah M.",
    city: "Liège, Belgique",
    text: "Service exceptionnel ! J'ai obtenu mon permis rapidement. L'équipe est très professionnelle et à l'écoute.",
  },
  {
    initials: "YA",
    name: "Youssef A.",
    city: "Bruxelles, Belgique",
    text: "Une expérience parfaite de A à Z. Les documents sont authentiques et le suivi est impeccable.",
  },
  {
    initials: "LK",
    name: "Laura K.",
    city: "Namur, Belgique",
    text: "Je recommande vivement ! Livraison rapide et communication fluide. Enfin un service fiable.",
  },
  {
    initials: "DM",
    name: "David M.",
    city: "Charleroi, Belgique",
    text: "Sérieux, rapide et efficace. J'étais sceptique au début mais le résultat est là. Merci !",
  },
  {
    initials: "MJ",
    name: "Marc J.",
    city: "Anvers, Belgique",
    text: "Le meilleur service que j'ai pu trouver. Tout est transparent et le permis est arrivé en un temps record.",
  },
  {
    initials: "EB",
    name: "Elena B.",
    city: "Gand, Belgique",
    text: "Très satisfaite de la prestation. Un accompagnement de qualité qui rassure énormément.",
  },
];

function ReviewCard({ review }) {
  return (
    <div style={styles.card}>
      <FaQuoteRight style={styles.quoteIcon} />
      <div style={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p style={styles.text}>{review.text}</p>
      <div style={styles.author}>
        <div style={styles.avatar}>{review.initials}</div>
        <div>
          <div style={styles.name}>{review.name}</div>
          <div style={styles.city}>{review.city}</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section id="avis" style={styles.section}>
      <div style={styles.header}>
        <span className="section-tag">Témoignages</span>
        <h2 className="section-title">Ce que disent nos clients</h2>
        <p className="section-sub">
          Découvrez les retours d'expérience de ceux qui nous ont fait
          confiance.
        </p>
      </div>

      <div style={styles.container}>
        {itemsPerView > 1 && (
          <button onClick={prev} style={{ ...styles.navBtn, left: -20 }}>
            <FaChevronLeft />
          </button>
        )}

        <div style={styles.sliderWrapper}>
          <div
            style={{
              ...styles.slider,
              transform: `translateX(-${index * (100 / itemsPerView)}%)`,
            }}
          >
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                style={{
                  ...styles.slide,
                  flex: `0 0 ${100 / itemsPerView}%`,
                }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {itemsPerView > 1 && (
          <button onClick={next} style={{ ...styles.navBtn, right: -20 }}>
            <FaChevronRight />
          </button>
        )}
      </div>

      <div style={styles.dots}>
        {[...Array(maxIndex + 1)].map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              ...styles.dot,
              background: index === i ? "var(--gold)" : "var(--gray-mid)",
              width: index === i ? 24 : 8,
            }}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "var(--gray-light)",
    padding: "100px 5vw",
    overflow: "hidden",
    position: "relative",
  },
  header: {
    textAlign: "center",
    marginBottom: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    position: "relative",
    maxWidth: 1200,
    margin: "0 auto",
  },
  sliderWrapper: {
    overflow: "hidden",
    margin: "0 -15px",
  },
  slider: {
    display: "flex",
    transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
  },
  slide: {
    padding: "0 15px",
    boxSizing: "border-box",
  },
  card: {
    background: "var(--white)",
    borderRadius: 24,
    padding: "40px 30px",
    height: "100%",
    boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease",
    border: "1px solid rgba(0,0,0,0.03)",
  },
  quoteIcon: {
    position: "absolute",
    top: 30,
    right: 30,
    fontSize: 24,
    color: "var(--gold-muted)",
    opacity: 0.5,
  },
  stars: {
    display: "flex",
    gap: 5,
    color: "var(--gold)",
    fontSize: 16,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "var(--gray-text)",
    marginBottom: 30,
    flexGrow: 1,
  },
  author: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    borderTop: "1px solid var(--gray-mid)",
    paddingTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--black)",
    fontWeight: 700,
    fontSize: 14,
    boxShadow: "0 4px 10px rgba(242, 169, 0, 0.2)",
  },
  name: {
    fontWeight: 700,
    fontSize: 15,
    color: "var(--black)",
  },
  city: {
    fontSize: 13,
    color: "var(--gray-text)",
    marginTop: 2,
  },
  navBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "var(--white)",
    border: "none",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    color: "var(--black)",
    fontSize: 16,
    transition: "all 0.3s ease",
    // Responsive visibility handled by itemsPerView check in render
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    marginTop: 40,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
