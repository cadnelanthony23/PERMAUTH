import React from 'react';

const TRUST_ITEMS = [
  {
    label: 'Document officiel belge',
    icon: (
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.128L8 10.5l-3.708 2.08L5 8.452 2 5.528l4.146-.772L8 1z"
          fill="var(--black)" />
      </svg>
    ),
  },
  {
    label: 'Livraison en 3 jours ouvrables',
    icon: (
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8S4.41 14.5 8 14.5 14.5 11.59 14.5 8 11.59 1.5 8 1.5zm0 12A5.5 5.5 0 012.5 8a5.5 5.5 0 015.5-5.5A5.5 5.5 0 0113.5 8a5.5 5.5 0 01-5.5 5.5zm.5-9H7V8.5l3.25 1.95.75-1.23L8.5 7.75V4.5z"
          fill="var(--black)" />
      </svg>
    ),
  },
  {
    label: 'Accompagnement personnalisé',
    icon: (
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM7 11.5V7h2v4.5H7zm0-6V4h2v1.5H7z"
          fill="var(--black)" />
      </svg>
    ),
  },
  {
    label: 'Vérification d\'erreurs incluse',
    icon: (
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <path d="M13 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1zm-1 10H4V4h8v8zM6 9h4v2H6V9zm0-3h4v2H6V6z"
          fill="var(--black)" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <div style={styles.bar}>
      {TRUST_ITEMS.map(({ label, icon }) => (
        <div key={label} style={styles.item}>
          {icon}
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  bar: {
    background: 'var(--gold)',
    padding: '14px 5vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 48,
    flexWrap: 'wrap',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontWeight: 600,
    fontSize: 13,
    color: 'var(--black)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
};
