import React from 'react';

const WA_CAT_B =
  'https://wa.me/33780863154?text=Bonjour%20je%20souhaite%20obtenir%20mon%20permis%20cat%C3%A9gorie%20B';
const WA_DEVIS =
  'https://wa.me/33780863154?text=Bonjour%20je%20souhaite%20un%20devis%20pour%20mon%20permis';

const PLANS = [
  {
    id: 'am',
    title: 'Catégorie AM / BSR',
    subtitle: 'Cyclomoteurs et BSR',
    price: null,
    priceLabel: 'Tarif sur demande',
    featured: false,
    features: [
      'Document officiel belge',
      'Livraison à domicile',
      'Vérification incluse',
    ],
    ctaLabel: 'Demander un devis',
    ctaLink: WA_DEVIS,
    ctaVariant: 'outline',
  },
  {
    id: 'ab',
    title: 'Catégorie A & B',
    subtitle: 'Moto et voiture — le plus demandé',
    price: 660,
    priceLabel: 'Tout compris — acompte 50% (330 €)',
    featured: true,
    features: [
      'Document officiel & enregistré',
      'Livraison en 3 jours ouvrables',
      'Vérification et correction gratuite',
      'Solde après validation de la copie',
      'Support WhatsApp 24h/24',
    ],
    ctaLabel: 'Commencer ma demande',
    ctaLink: WA_CAT_B,
    ctaVariant: 'solid',
  },
  {
    id: 'cd',
    title: 'Catégories C & D',
    subtitle: 'Poids lourds et transport',
    price: null,
    priceLabel: 'Tarif sur demande',
    featured: false,
    features: [
      'Document officiel belge',
      'Livraison à domicile',
      'Accompagnement personnalisé',
    ],
    ctaLabel: 'Demander un devis',
    ctaLink: WA_DEVIS,
    ctaVariant: 'outline',
  },
];

function CheckIcon() {
  return (
    <span style={{ color: 'var(--gold)', fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
  );
}

function InfoIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="var(--gold)" strokeWidth="1.3" />
      <path d="M8 5v3.5M8 10.5v.5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlanCard({ title, subtitle, price, priceLabel, featured, features, ctaLabel, ctaLink, ctaVariant }) {
  return (
    <div style={{ ...styles.card, ...(featured ? styles.cardFeatured : {}) }}>
      {featured && <div style={styles.featuredBadge}>Populaire</div>}
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardSubtitle}>{subtitle}</p>

      <div style={styles.priceArea}>
        {price ? (
          <>
            <div style={styles.price}>
              <span style={{ fontSize: 20 }}>€ </span>{price}
            </div>
            <div style={styles.priceNote}>{priceLabel}</div>
          </>
        ) : (
          <>
            <div style={styles.priceDevis}>€ Devis</div>
            <div style={styles.priceNote}>{priceLabel}</div>
          </>
        )}
      </div>

      <ul style={styles.features}>
        {features.map((feat) => (
          <li key={feat} style={styles.featureItem}>
            <CheckIcon />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <a href={ctaLink} target="_blank" rel="noreferrer"
        className={ctaVariant === 'solid' ? 'btn-gold' : 'btn-outline-gold'}>
        {ctaLabel}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="tarifs" style={styles.section}>
      <span className="section-tag" style={{ color: 'var(--gold)' }}>Tarification</span>
      <h2 className="section-title" style={{ color: 'var(--white)' }}>
        Tarifs clairs, sans surprise
      </h2>
      <p className="section-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>
        Tous nos tarifs sont tout compris : production, enregistrement et livraison à domicile.
      </p>

      <div style={styles.grid}>
        {PLANS.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
      </div>

      {/* Deposit info banner */}
      <div style={styles.depositBanner}>
        <h4 style={styles.depositTitle}>
          <InfoIcon />
          Notre politique de paiement en deux fois
        </h4>
        <p style={styles.depositText}>
          Un acompte de 50&nbsp;% (330&nbsp;€) est demandé pour lancer la production et
          l'enregistrement officiel. Le solde restant (330&nbsp;€) n'est exigible qu'après
          que vous avez reçu et validé une copie de votre permis. En cas d'erreur, nous
          corrigeons le document gratuitement avant de vous demander le paiement final.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: 'var(--black)',
    padding: '96px 5vw',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 24,
    marginTop: 56,
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 36,
    display: 'flex',
    flexDirection: 'column',
  },
  cardFeatured: {
    border: '1px solid var(--gold)',
    background: 'rgba(242,169,0,0.06)',
    position: 'relative',
  },
  featuredBadge: {
    position: 'absolute',
    top: -13, left: '50%',
    transform: 'translateX(-50%)',
    background: 'var(--gold)',
    color: 'var(--black)',
    fontSize: 11, fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    padding: '4px 16px',
    borderRadius: 20,
    whiteSpace: 'nowrap',
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    color: 'var(--white)',
    fontSize: 22,
    marginBottom: 8,
  },
  cardSubtitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
  },
  priceArea: {
    margin: '20px 0 8px',
  },
  price: {
    fontFamily: 'var(--font-display)',
    fontSize: 48,
    fontWeight: 700,
    color: 'var(--gold)',
  },
  priceDevis: {
    fontFamily: 'var(--font-display)',
    fontSize: 36,
    fontWeight: 700,
    color: 'var(--gold)',
  },
  priceNote: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 13,
    marginBottom: 20,
    marginTop: 4,
  },
  features: {
    listStyle: 'none',
    marginBottom: 32,
    flex: 1,
  },
  featureItem: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 14,
    padding: '8px 0',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
  },
  depositBanner: {
    marginTop: 40,
    background: 'rgba(242,169,0,0.08)',
    border: '1px solid rgba(242,169,0,0.25)',
    borderRadius: 10,
    padding: 24,
  },
  depositTitle: {
    color: 'var(--gold)',
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  depositText: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 14,
    lineHeight: 1.7,
  },
};
