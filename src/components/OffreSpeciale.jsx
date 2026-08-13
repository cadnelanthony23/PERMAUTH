import React from "react";

const WA_OFFRE =
  "https://wa.me/33780863154?text=Bonjour%2C%20je%20voudrais%20profiter%20de%20l%27offre%20-10%25%20pour%20mon%20permis%20de%20conduire";

function WhatsAppIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="var(--red)">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function OffreSpeciale() {
  return (
    <section style={styles.section}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <div style={styles.discountBadge}>— 10% de réduction —</div>
        <h2 style={styles.title}>Offre spéciale limitée</h2>
        <p style={styles.subtitle}>
          Les 10 premiers clients bénéficient d'une réduction de 10&nbsp;% sur
          leur permis de conduire (catégorie A, B ou Code). Ne ratez pas cette
          opportunité.
        </p>

        <a href={WA_OFFRE} target="_blank" rel="noreferrer" style={styles.cta}>
          <WhatsAppIcon />
          Réclamer mon offre maintenant
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    backgroundImage: 'url("/images/691.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    padding: "100px 5vw",
    textAlign: "center",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(204, 0, 0, 0.75)", // Rouge (var(--red)) avec opacité réduite
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
  },
  discountBadge: {
    display: "inline-block",
    background: "var(--white)",
    color: "var(--red)",
    fontSize: 20,
    fontWeight: 700,
    padding: "10px 28px",
    borderRadius: 4,
    marginBottom: 32,
    fontFamily: "var(--font-display)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
  title: {
    fontFamily: "var(--font-display)",
    color: "var(--white)",
    fontSize: "clamp(32px, 4vw, 52px)",
    marginBottom: 20,
    fontWeight: 700,
    textShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },
  subtitle: {
    color: "var(--white)",
    fontSize: 18,
    maxWidth: 600,
    margin: "0 auto 40px",
    lineHeight: 1.8,
    fontWeight: 500,
    textShadow: "0 1px 5px rgba(0,0,0,0.2)",
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    background: "var(--white)",
    color: "var(--red)",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 17,
    padding: "18px 40px",
    borderRadius: 8,
    transition: "all 0.3s ease",
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
  },
};
