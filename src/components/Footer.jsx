import React from 'react';

const SERVICES = [
  'Catégorie AM / BSR',
  'Catégorie A (moto)',
  'Catégorie B (voiture)',
  'Catégorie C (poids lourds)',
  'Catégorie D (transport)',
  "Documents d'identité",
];

const INFO_LINKS = [
  { label: 'Comment ça marche', href: '#processus' },
  { label: 'Tarifs',            href: '#tarifs'     },
  { label: 'Documents requis',  href: '#dossier'    },
  { label: 'Témoignages',       href: '#avis'       },
];

function PhoneIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="rgba(255,255,255,0.45)" style={{ marginTop: 2, flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstaIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.45)" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      <path d="M12 6v6l4 2" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        {/* Brand */}
        <div>
          <a href="#" style={styles.logo}>
            Perm<span style={{ color: 'var(--gold)' }}>Auth</span> BE
          </a>
          <p style={styles.brandText}>
            Service d'accompagnement officiel pour l'obtention de votre permis
            de conduire en Belgique. Rapide, fiable et disponible 24h/24, 7j/7.
          </p>
          {/* Mini Belgian flag */}
          <div style={styles.flag}>
            <div style={{ ...styles.strip, background: 'var(--black)', border: '1px solid rgba(255,255,255,0.15)', width: 28 }} />
            <div style={{ ...styles.strip, background: 'var(--gold)', width: 28 }} />
            <div style={{ ...styles.strip, background: 'var(--red)', width: 28 }} />
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={styles.colTitle}>Services</h4>
          <ul style={{ listStyle: 'none' }}>
            {SERVICES.map((s) => (
              <li key={s} style={{ marginBottom: 10 }}>
                <a href="#categories" style={styles.link}
                  onMouseEnter={e => (e.target.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.45)')}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 style={styles.colTitle}>Informations</h4>
          <ul style={{ listStyle: 'none' }}>
            {INFO_LINKS.map(({ label, href }) => (
              <li key={label} style={{ marginBottom: 10 }}>
                <a href={href} style={styles.link}
                  onMouseEnter={e => (e.target.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.45)')}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={styles.colTitle}>Contact</h4>
          <div style={styles.contactItem}>
            <PhoneIcon />
            <a href="https://wa.me/33780863154" target="_blank" rel="noreferrer" style={styles.link}
              onMouseEnter={e => (e.target.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.45)')}>
              +33 7 80 86 31 54
            </a>
          </div>
          <div style={styles.contactItem}>
            <InstaIcon />
            <a href="https://instagram.com/permis_authentique_be.fr/"
              target="_blank" rel="noreferrer" style={styles.link}
              onMouseEnter={e => (e.target.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.45)')}>
              @permis_authentique_be.fr
            </a>
          </div>
          <div style={styles.contactItem}>
            <ClockIcon />
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>
              Disponible 24h/24 et 7j/7
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={styles.bottom}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} PermAuth Belgique — Tous droits réservés
        </p>
        <div style={styles.socials}>
          {[
            { label: 'W',  href: 'https://wa.me/33780863154',                   title: 'WhatsApp' },
            { label: 'In', href: 'https://instagram.com/permis_authentique_be.fr/', title: 'Instagram' },
          ].map(({ label, href, title }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              title={title} style={styles.socialLink}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.color = 'var(--gold)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
              }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#0D0D0D',
    padding: '64px 5vw 32px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 48,
    marginBottom: 48,
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontSize: 24,
    fontWeight: 700,
    color: 'var(--white)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: 14,
  },
  brandText: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 14,
    lineHeight: 1.7,
    maxWidth: 280,
  },
  flag: { display: 'flex', gap: 4, marginTop: 20 },
  strip: { height: 4, borderRadius: 2 },
  colTitle: {
    color: 'var(--white)',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  link: {
    color: 'rgba(255,255,255,0.45)',
    textDecoration: 'none',
    fontSize: 14,
    transition: 'color 0.2s',
  },
  contactItem: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bottom: {
    borderTop: '1px solid rgba(255,255,255,0.08)',
    paddingTop: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  copyright: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 13,
  },
  socials: { display: 'flex', gap: 12 },
  socialLink: {
    width: 36, height: 36,
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.4)',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    transition: 'border-color 0.2s, color 0.2s',
  },
};
