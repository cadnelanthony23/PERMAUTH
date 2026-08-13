import React, { useState, useEffect } from "react";

const WA_LINK =
  "https://wa.me/33780863154?text=Bonjour%20je%20souhaite%20obtenir%20mon%20permis%20de%20conduire%20en%20Belgique";

const NAV_LINKS = [
  { label: "Catégories", href: "#categories" },
  { label: "Processus", href: "#processus" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Dossier", href: "#dossier" },
  { label: "Avis", href: "#avis" },
];

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5vw",
    height: 72,
    transition: "all .4s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  logo: {
    fontSize: 22,
    fontWeight: 800,
    color: "white",
    textDecoration: "none",
    letterSpacing: "-0.5px",
    fontFamily: "var(--font-display)",
  },

  logoAccent: {
    color: "var(--gold)",
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: 30,
    listStyle: "none",
  },

  li: {
    position: "relative",
  },

  link: {
    position: "relative",
    color: "rgba(255,255,255,0.7)",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "all .3s ease",
  },

  underline: {
    position: "absolute",
    left: 0,
    bottom: -6,
    width: "0%",
    height: 2,
    background: "var(--gold)",
    transition: "width .3s ease",
  },

  cta: {
    background: "linear-gradient(135deg,var(--gold),var(--gold-dark))",
    color: "black",
    padding: "10px 18px",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 13,
    textDecoration: "none",
    letterSpacing: "1px",
    textTransform: "uppercase",
    boxShadow: "0 10px 30px rgba(242,169,0,0.25)",
    transition: "transform .2s ease",
  },

  hamburger: {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  bar: {
    width: 26,
    height: 2,
    background: "white",
    borderRadius: 2,
    transition: "all .3s ease",
  },

  mobileMenu: {
    position: "fixed",
    top: 72,
    left: 0,
    right: 0,
    background: "rgba(10,10,10,0.95)",
    backdropFilter: "blur(20px)",
    padding: "20px 5vw",
    display: "flex",
    flexDirection: "column",
    gap: 18,
    borderBottom: "1px solid rgba(242,169,0,0.2)",
    transition: "all .3s ease",
    zIndex: 999,
  },

  mobileLink: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 15,
    textTransform: "uppercase",
    letterSpacing: "1px",
    textDecoration: "none",
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },

  mobileCta: {
    marginTop: 10,
    background: "var(--gold)",
    color: "black",
    padding: "14px",
    textAlign: "center",
    borderRadius: 10,
    fontWeight: 700,
    textDecoration: "none",
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onResize = () => setIsMobile(window.innerWidth < 900);

    onResize();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          ...styles.nav,
          background: scrolled ? "rgba(13,13,13,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(242,169,0,0.25)" : "none",
        }}
      >
        {/* LOGO */}
        <a href="#" style={styles.logo}>
          Perm<span style={styles.logoAccent}>Auth</span> BE
        </a>

        {/* DESKTOP LINKS */}
        {!isMobile && (
          <ul style={styles.links}>
            {NAV_LINKS.map((l) => (
              <li key={l.href} style={styles.li}>
                <a
                  href={l.href}
                  style={styles.link}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                  }
                >
                  {l.label}
                  <span style={styles.underline} />
                </a>
              </li>
            ))}

            <li>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                style={styles.cta}
              >
                Commencer
              </a>
            </li>
          </ul>
        )}

        {/* MOBILE BUTTON */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={styles.hamburger}
          >
            <span
              style={{
                ...styles.bar,
                transform: menuOpen ? "rotate(45deg) translateY(6px)" : "",
              }}
            />
            <span style={{ ...styles.bar, opacity: menuOpen ? 0 : 1 }} />
            <span
              style={{
                ...styles.bar,
                transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "",
              }}
            />
          </button>
        )}
      </nav>

      {/* MOBILE MENU */}
      {isMobile && (
        <div
          style={{
            ...styles.mobileMenu,
            transform: menuOpen ? "translateY(0)" : "translateY(-20px)",
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            style={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Commencer ma demande
          </a>
        </div>
      )}
    </>
  );
}
