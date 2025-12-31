import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const menu = [
  { label: "Home", href: "/" },
  { label: "List of Winner", href: "/daftarpemenang/daftar-pemenang" },
  {
    label: "Certificate",
    submenu: [
      {
        label: "Certificate for Supervisors 2025 (Offline)",
        target: "_blank",
        href: "https://drive.google.com/drive/u/0/folders/1wDsPLrU5VXpmG1YJJwZHzfFxVYqiJcxj?usp=sharing",
      },
      {
        label: "Certificate for Supervisors 2025 (Online)",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1byPQ-RILiVIBlw3WgV33cEz8uZwTSNVA?usp=sharing",
      },
      {
        label: "Certificate for Supervisors 2024",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/13odYykW68bnfVGoEFXJ20iOJkR146j0T?usp=sharing",
      },
    ],
  },
  {
    label: "Curation",
    submenu: [
      {
        label: "Curation 2024",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1VHcvXdOu62AG19pmJVkfPMqMBlAkrpT6",
      },
      {
        label: "Curation 2023",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1Ufn2xBvUusNY_sbNQQcX8_OEcrYpi_fa?usp=sharing",
      },
      {
        label: "Curation 2022",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1hSGHJxKW7Vuto5az0pOuNPG3NNBJpsaL?usp=sharing",
      },
      {
        label: "Curation 2021",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/163n5svnft8JDC60yddD1Y-KlplOmSvwX?usp=sharing",
      },
      {
        label: "Curation 2020",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1GmwC2S0u3K7XxT2RXXszWvjMLI2aBaBP?usp=sharing",
      },
    ],
  },
  {
    label: "Gallery",
    submenu: [
      {
        label: "Gallery 2025",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1HcKfSzW6rjnait8yS-W40lnH0BvxBRB5?usp=sharing",
      },
      {
        label: "Gallery 2024",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1OZAy_5LPSwutTivLjuhIVYRgO0ctFoSX?usp=sharing",
      },
      {
        label: "Gallery 2023",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1dmpVvlo9oW4lT7ocNSw-pCsMm8JMRNcR?usp=sharing",
      },
      {
        label: "Gallery 2022",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1qj5nnb0JCV2GxDZUZyWZTaxdtXlVjI-R?usp=drive_link",
      },
      {
        label: "Gallery 2021",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/100rDLD2T9EjwCgNDJcC7ldMCfUzym_aN?usp=drive_link",
      },
      {
        label: "Gallery 2020",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1awa1sITOW8HcnSb8VUo5991z7mJ5CIl9?usp=drive_link",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  {
    label: "Media",
    submenu: [
      { label: "News from Media", href: "/news" },
      {
        label: "Press Release 2025",
        target: "_blank",
        href: "https://docs.google.com/document/d/1K3-tFGs6De3LFRwbgNFeVoOLNRJYidy-dXntTYth0Fk/edit?tab=t.0",
      },
      {
        label: "Press Release 2024",
        target: "_blank",
        href: "https://drive.google.com/file/d/1ixLPdHz9Bq-0virK17Rss9Zu1uxx74Ho/view?usp=sharing",
      },
      {
        label: "Press Release 2023",
        target: "_blank",
        href: "https://drive.google.com/file/d/1so7MicFKw6SHyDym0D8qPBnrfgRMouv9/view?usp=sharing",
      },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-logo">
          <Image
            src="/assets/img/i2aspo-head.png"
            alt="I2ASPO Logo"
            className="navbar-logo-img"
            width={120}
            height={48}
            priority
          />
        </div>
        <ul className="navbar-menu">
          {menu.map((item, idx) =>
            item.submenu ? (
              <li
                key={item.label}
                className="navbar-menu-item navbar-has-dropdown"
                onMouseEnter={() => setOpen(idx)}
                onMouseLeave={() => setOpen(null)}
              >
                <span className="navbar-link">
                  {item.label} <span className="navbar-caret">▼</span>
                </span>
                {open === idx && (
                  <ul className="navbar-dropdown">
                    {item.submenu.map((sub) => (
                      <li key={sub.href} className="navbar-dropdown-item">
                        {sub.target === "_blank" ? (
                          <a
                            href={sub.href}
                            className="navbar-dropdown-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            href={sub.href}
                            className="navbar-dropdown-link"
                          >
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label} className="navbar-menu-item">
                <Link href={item.href} className="navbar-link">
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <button
          className="navbar-burger"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`navbar-mobile-overlay${mobileOpen ? " open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <aside className={`navbar-mobile${mobileOpen ? " open" : ""}`}>
        <div className="navbar-mobile-header">
          <Image
            src="/assets/img/i2aspo-head.png"
            alt="I2ASPO Logo"
            className="navbar-logo-img"
            width={120}
            height={48}
            priority
          />
          <button
            className="navbar-mobile-close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="32" height="32" viewBox="0 0 32 32">
              <line
                x1="8"
                y1="8"
                x2="24"
                y2="24"
                stroke="#fff"
                strokeWidth="2.5"
              />
              <line
                x1="24"
                y1="8"
                x2="8"
                y2="24"
                stroke="#fff"
                strokeWidth="2.5"
              />
            </svg>
          </button>
        </div>
        <ul className="navbar-mobile-menu">
          {menu.map((item, idx) =>
            item.submenu ? (
              <li key={item.label} className="navbar-mobile-item">
                <button
                  className="navbar-mobile-link"
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === idx ? null : idx)
                  }
                >
                  {item.label}
                  <span
                    className={`navbar-mobile-caret${
                      mobileDropdown === idx ? " open" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <ul
                  className={`navbar-mobile-dropdown${
                    mobileDropdown === idx ? " open" : ""
                  }`}
                >
                  {item.submenu.map((sub) => (
                    <li key={sub.href}>
                      {sub.target === "_blank" ? (
                        <a
                          href={sub.href}
                          className="navbar-mobile-sublink"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ) : (
                        <Link
                          href={sub.href}
                          className="navbar-mobile-sublink"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label} className="navbar-mobile-item">
                <Link
                  href={item.href}
                  className="navbar-mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </aside>
    </>
  );
}
