import React, { useState } from "react";
import {
  FaMotorcycle,
  FaCarSide,
  FaTruck,
  FaBus,
  FaFileAlt,
} from "react-icons/fa";
import { MdElectricScooter } from "react-icons/md";

const CATEGORIES = [
  {
    icon: MdElectricScooter,
    name: "AM / BSR",
    sub: "Cyclomoteurs et quadricycles légers. Accessible dès 16 ans.",
    badge: "Entrée de gamme",
    popular: false,
  },
  {
    icon: FaMotorcycle,
    name: "Catégorie A",
    sub: "A, A1, A2 — Motos légères à cylindrées illimitées.",
    badge: "Populaire",
    popular: true,
  },
  {
    icon: FaCarSide,
    name: "Catégorie B",
    sub: "B, B1, B2, BE — Voitures particulières et véhicules légers.",
    badge: "Populaire",
    popular: true,
  },
  {
    icon: FaTruck,
    name: "Catégorie C",
    sub: "C, C1, CE, C1E — Poids lourds et transport de marchandises.",
    badge: "Professionnel",
    popular: false,
  },
  {
    icon: FaBus,
    name: "Catégorie D",
    sub: "D, D1, D2 — Transport de personnes, grande capacité.",
    badge: "Professionnel",
    popular: false,
  },
  {
    icon: FaFileAlt,
    name: "Services additionnels",
    sub: "Renouvellement carte d'identité, titre de séjour, passeport.",
    badge: "Sur demande",
    dark: true,
  },
];

function CategoryCard({ icon: Icon, name, sub, badge, popular, dark }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(dark ? styles.cardDark : {}),
        transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 50px rgba(0,0,0,0.12)"
          : "0 10px 30px rgba(0,0,0,0.04)",
        borderColor: hovered ? "var(--gold)" : "var(--border)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...styles.glow,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div
        style={{
          ...styles.accentBar,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />

      <div
        style={{
          ...styles.iconWrap,
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        <Icon size={30} />
      </div>

      <div
        style={{
          ...styles.name,
          ...(dark ? { color: "var(--white)" } : {}),
        }}
      >
        {name}
      </div>

      <div
        style={{
          ...styles.sub,
          ...(dark ? { color: "rgba(255,255,255,0.65)" } : {}),
        }}
      >
        {sub}
      </div>

      <span
        style={{
          ...styles.badge,
          ...(popular ? styles.badgePopular : {}),
          ...(dark ? styles.badgeDark : {}),
        }}
      >
        {badge}
      </span>
    </div>
  );
}

export default function Categories() {
  return (
    <section id="categories" style={styles.section}>
      <div style={styles.header}>
        <div>
          <span className="section-tag">Nos services</span>

          <h2 className="section-title">Catégories de permis disponibles</h2>

          <p className="section-sub">
            Nous couvrons l'ensemble des catégories officielles de permis de
            conduire belge pour tous types de véhicules.
          </p>
        </div>
      </div>

      <div style={styles.grid}>
        {CATEGORIES.map((cat) => (
          <CategoryCard key={cat.name} {...cat} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "var(--gray-light)",
    padding: "110px 5vw",
  },

  header: {
    display: "grid",
    gridTemplateColumns: "1fr",
    marginBottom: 64,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 24,
  },

  card: {
    position: "relative",
    overflow: "hidden",
    background: "var(--white)",
    border: "1px solid var(--border)",
    borderRadius: 18,
    padding: "30px 26px",
    transition: "all .35s ease",
    cursor: "default",
  },

  cardDark: {
    background: "var(--black)",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  glow: {
    position: "absolute",
    inset: "-120px",
    background:
      "radial-gradient(circle at top right, rgba(242,169,0,0.14), transparent 60%)",
    transition: "opacity .4s ease",
    pointerEvents: "none",
  },

  accentBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 4,
    background: "linear-gradient(90deg,var(--gold),var(--gold-dark))",
    transformOrigin: "left",
    transition: "transform .35s ease",
  },

  iconWrap: {
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    fontSize: 30,
    borderRadius: 16,
    background:
      "linear-gradient(135deg,var(--gold-light),rgba(242,169,0,0.12))",
    transition: "all .35s ease",
  },

  name: {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 10,
  },

  sub: {
    color: "var(--gray-text)",
    fontSize: 14,
    lineHeight: 1.7,
    marginBottom: 18,
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "7px 14px",
    borderRadius: "999px",
    background: "var(--gold-light)",
    color: "var(--gold-dark)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: ".6px",
    textTransform: "uppercase",
  },

  badgePopular: {
    background: "rgba(204,0,0,0.08)",
    color: "var(--red)",
  },

  badgeDark: {
    background: "rgba(242,169,0,0.15)",
    color: "var(--gold)",
  },
};
