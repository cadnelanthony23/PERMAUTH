import React from 'react';

const STEPS = [
  {
    num: '1',
    title: 'Prise de contact',
    desc: 'Contactez-nous sur WhatsApp ou Instagram. Nous vous répondons dans les plus brefs délais.',
  },
  {
    num: '2',
    title: 'Envoi du dossier',
    desc: 'Transmettez vos informations et documents. Nous vous précisons exactement ce qu\'il faut fournir.',
  },
  {
    num: '3',
    title: 'Acompte de 50%',
    desc: 'Versez 330 € pour lancer la production. Le solde est dû uniquement après validation.',
  },
  {
    num: '4',
    title: 'Vérification',
    desc: 'Nous vous envoyons une copie pour contrôle. Toute erreur est corrigée gratuitement.',
  },
  {
    num: '5',
    title: 'Livraison à domicile',
    desc: 'Le document est expédié à votre adresse en Belgique dans un délai de 3 jours ouvrables.',
  },
];

function StepCard({ num, title, desc }) {
  return (
    <div style={styles.step}>
      <div style={styles.stepNum}>{num}</div>
      <h4 style={styles.stepTitle}>{title}</h4>
      <p style={styles.stepDesc}>{desc}</p>
    </div>
  );
}

export default function Process() {
  return (
    <section id="processus" style={styles.section}>
      <div style={styles.header}>
        <span className="section-tag">Comment ça marche</span>
        <h2 className="section-title">Un processus simple et transparent</h2>
        <p className="section-sub">
          De votre première prise de contact jusqu'à la réception de votre
          document, nous vous guidons à chaque étape.
        </p>
      </div>

      <div style={styles.grid}>
        {/* connector line */}
        <div style={styles.connector} />
        {STEPS.map((step) => (
          <StepCard key={step.num} {...step} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: 'var(--white)',
    padding: '96px 5vw',
  },
  header: {
    textAlign: 'center',
    maxWidth: 560,
    margin: '0 auto 56px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: 0,
    position: 'relative',
  },
  connector: {
    position: 'absolute',
    top: 32,
    left: '10%',
    right: '10%',
    height: 1,
    background: 'var(--border)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  step: {
    textAlign: 'center',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  },
  stepNum: {
    width: 64, height: 64,
    borderRadius: '50%',
    background: 'var(--white)',
    border: '2px solid var(--gold)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontSize: 22,
    fontWeight: 700,
    color: 'var(--gold)',
    margin: '0 auto 20px',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 8,
  },
  stepDesc: {
    fontSize: 13,
    color: 'var(--gray-text)',
    lineHeight: 1.6,
  },
};
