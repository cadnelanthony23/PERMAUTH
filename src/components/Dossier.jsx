import React from "react";
import {
  FaUser,
  FaBirthdayCake,
  FaLanguage,
  FaHome,
  FaBriefcase,
  FaIdCard,
  FaCamera,
  FaSignature,
  FaWhatsapp,
} from "react-icons/fa";

const WA_DOSSIER =
  "https://wa.me/33780863154?text=Bonjour%2C%20je%20souhaite%20d%C3%A9marrer%20mon%20dossier%20pour%20un%20permis%20de%20conduire%20belge";

const DOCUMENTS = [
  {
    icon: FaUser,
    title: "Noms & Prénom",
    desc: "Tels qu'ils figurent sur vos documents officiels",
  },
  {
    icon: FaBirthdayCake,
    title: "Date & lieu de naissance",
    desc: "Informations d'état civil complètes",
  },
  {
    icon: FaLanguage,
    title: "Langue parlée",
    desc: "Français, néerlandais, allemand ou autre",
  },
  {
    icon: FaHome,
    title: "Adresse complète",
    desc: "Pour la livraison et l'enregistrement",
  },
  {
    icon: FaBriefcase,
    title: "Profession",
    desc: "Votre activité professionnelle actuelle",
  },
  {
    icon: FaIdCard,
    title: "Carte d'identité",
    desc: "Copie recto-verso de votre pièce d'identité",
  },
  {
    icon: FaCamera,
    title: "Photo 4×4 cm",
    desc: "Format standard passeport, fond clair",
  },
  {
    icon: FaSignature,
    title: "Signature",
    desc: "Signature manuscrite envoyée par photo",
  },
];

function DocumentItem({ icon: Icon, title, desc }) {
  return (
    <div style={styles.docItem}>
      <div style={styles.docIcon}>
        <Icon size={16} />
      </div>

      <div>
        <h5 style={styles.docTitle}>{title}</h5>
        <p style={styles.docDesc}>{desc}</p>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return <FaWhatsapp size={18} />;
}

export default function Dossier() {
  return (
    <section id="dossier" style={styles.section}>
      <div style={styles.grid}>
        {/* LEFT */}
        <div>
          <span className="section-tag">Documents requis</span>

          <h2 className="section-title">Préparez votre dossier</h2>

          <p className="section-sub">
            Pour produire et enregistrer votre permis de conduire, nous avons
            besoin des éléments suivants. Tout peut être transmis par message.
          </p>

          <div style={styles.docGrid}>
            {DOCUMENTS.map((doc) => (
              <DocumentItem key={doc.title} {...doc} />
            ))}
          </div>
        </div>

        {/* RIGHT CTA */}
        <div style={styles.ctaCard}>
          <div style={styles.ctaIcon}>📩</div>

          <h3 style={styles.ctaTitle}>Démarrer votre dossier</h3>

          <p style={styles.ctaText}>
            Envoyez-nous un message sur WhatsApp. Nous vous guidons étape par
            étape pour constituer votre dossier rapidement.
          </p>

          <a
            href={WA_DOSSIER}
            target="_blank"
            rel="noreferrer"
            style={styles.ctaBtn}
          >
            <WhatsAppIcon />
            Envoyer mon dossier
          </a>

          <p style={styles.ctaFootnote}>
            Aussi disponible sur Instagram :{" "}
            <a
              href="https://instagram.com/permis_authentique_be.fr/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              @permis_authentique_be.fr
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "var(--white)",
    padding: "110px 5vw",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 70,
    alignItems: "center",
  },

  docGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 14,
    marginTop: 36,
  },

  docItem: {
    background: "var(--gray-light)",
    borderRadius: 12,
    padding: 16,
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    transition: "all .25s ease",
  },

  docIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    background:
      "linear-gradient(135deg,var(--gold-light),rgba(242,169,0,0.15))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--gold-dark)",
    flexShrink: 0,
  },

  docTitle: {
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 3,
  },

  docDesc: {
    fontSize: 12,
    color: "var(--gray-text)",
    lineHeight: 1.5,
  },

  ctaCard: {
    background: "var(--black)",
    borderRadius: 18,
    padding: 42,
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },

  ctaIcon: {
    fontSize: 42,
    marginBottom: 16,
  },

  ctaTitle: {
    fontFamily: "var(--font-display)",
    color: "var(--white)",
    fontSize: 24,
    marginBottom: 12,
  },

  ctaText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 14,
    lineHeight: 1.7,
    marginBottom: 28,
  },

  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,

    background: "var(--gold)",
    color: "var(--black)",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 15,

    padding: "14px 22px",
    borderRadius: 10,

    width: "100%",

    transition: "all .25s ease",
  },

  ctaFootnote: {
    color: "rgba(255,255,255,0.35)",
    fontSize: 12,
    marginTop: 16,
  },
};
