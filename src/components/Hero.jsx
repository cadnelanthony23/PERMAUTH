import React from "react";

const WA_LINK =
  "https://wa.me/33780863154?text=Bonjour%20je%20souhaite%20obtenir%20mon%20permis%20de%20conduire%20en%20Belgique";

const STATS = [
  { num: "3", lbl: "Jours max de livraison" },
  { num: "5+", lbl: "Catégories de permis" },
  { num: "24/7", lbl: "Support disponible" },
  { num: "100%", lbl: "Authentique & officiel" },
];

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="5" stroke="var(--gold)" />
      <path d="M3.5 6l1.5 1.5L8.5 4.5" stroke="var(--gold)" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section style={styles.section}>
      {/* BACKGROUND FADES */}
      <div style={styles.fadeGold} />
      <div style={styles.fadeRed} />
      <div style={styles.noise} />

      {/* LEFT */}
      <div style={styles.left}>
        <div style={styles.badge}>
          <Check />
          Belgique · Service officiel · 24h/24
        </div>

        <h1 style={styles.title}>
          Votre permis <br />
          <span style={styles.accent}>belge officiel</span>
          <br />
          en 3 jours.
        </h1>

        <p style={styles.subtitle}>
          Accompagnement complet pour l’obtention de votre permis de conduire
          belge. Procédure rapide, sécurisée et simplifiée.
        </p>

        <div style={styles.actions}>
          <a href={WA_LINK} style={styles.primaryBtn}>
            <WhatsAppIcon />
            Démarrer ma demande
          </a>

          <a href="#categories" style={styles.secondaryBtn}>
            Voir les catégories
            <Arrow />
          </a>
        </div>

        {/* STATS INLINE */}
        <div style={styles.statsRow}>
          {STATS.map((s) => (
            <div key={s.lbl} style={styles.stat}>
              <div style={styles.statNum}>{s.num}</div>
              <div style={styles.statLbl}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CARD */}
      <div style={styles.right}>
        <div style={styles.card}>
          <div style={styles.flag} />

          <h3 style={styles.cardTitle}>PermAuth Belgique</h3>

          <div style={styles.price}>
            660€ <span>tout compris</span>
          </div>

          <div style={styles.cardGlow} />

          <div style={styles.miniStats}>
            {STATS.map((s) => (
              <div key={s.lbl} style={styles.miniBox}>
                <div>{s.num}</div>
                <span>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    alignItems: "center",
    padding: "90px 5vw",
    background: "var(--black)",
    position: "relative",
    overflow: "hidden",
    gap: 60,
  },

  /* 🌫️ BACKGROUND EFFECTS */
  fadeGold: {
    position: "absolute",
    top: "-20%",
    right: "-10%",
    width: "500px",
    height: "500px",
    background:
      "radial-gradient(circle, rgba(242,169,0,0.25), transparent 60%)",
    filter: "blur(60px)",
  },

  fadeRed: {
    position: "absolute",
    bottom: "-20%",
    left: "-10%",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(255,0,0,0.15), transparent 60%)",
    filter: "blur(70px)",
  },

  noise: {
    position: "absolute",
    inset: 0,
    opacity: 0.04,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
  },

  left: {
    position: "relative",
    zIndex: 2,
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 14px",
    border: "1px solid rgba(242,169,0,0.4)",
    background: "rgba(242,169,0,0.1)",
    color: "var(--gold)",
    fontSize: 12,
    marginBottom: 24,
  },

  title: {
    fontSize: "clamp(40px,5vw,70px)",
    color: "white",
    fontWeight: 700,
    lineHeight: 1.1,
  },

  accent: {
    color: "var(--gold)",
  },

  subtitle: {
    color: "rgba(255,255,255,0.65)",
    marginTop: 20,
    fontSize: 16,
    maxWidth: 500,
    lineHeight: 1.7,
  },

  actions: {
    display: "flex",
    gap: 14,
    marginTop: 30,
    flexWrap: "wrap",
  },

  primaryBtn: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "var(--gold)",
    color: "black",
    padding: "12px 18px",
    borderRadius: 10,
    fontWeight: 700,
    textDecoration: "none",
  },

  secondaryBtn: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "white",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "12px 18px",
    borderRadius: 10,
    textDecoration: "none",
  },

  statsRow: {
    display: "flex",
    gap: 20,
    marginTop: 40,
    flexWrap: "wrap",
  },

  stat: {
    background: "rgba(255,255,255,0.05)",
    padding: 14,
    borderRadius: 12,
    minWidth: 120,
  },

  statNum: {
    color: "var(--gold)",
    fontSize: 22,
    fontWeight: 700,
  },

  statLbl: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
    marginTop: 4,
  },

  right: {
    display: "flex",
    justifyContent: "center",
  },

  card: {
    width: 360,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 18,
    padding: 30,
    position: "relative",
    overflow: "hidden",
  },

  cardGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at top, rgba(242,169,0,0.2), transparent 60%)",
  },

  flag: {
    height: 6,
    borderRadius: 4,
    marginBottom: 20,
    background: "linear-gradient(90deg, black 33%, gold 33% 66%, red 66%)",
  },

  cardTitle: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },

  price: {
    color: "var(--gold)",
    fontSize: 34,
    fontWeight: 700,
  },

  miniStats: {
    marginTop: 25,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },

  miniBox: {
    background: "rgba(255,255,255,0.05)",
    padding: 10,
    borderRadius: 10,
    fontSize: 12,
    color: "rgba(255,255,255,0.6)",
  },
};
