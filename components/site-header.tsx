"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "@/components/icons";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/truck-schedule", label: "Truck Schedule" },
  { href: "/catering", label: "Catering" },
  { href: "/food-truck-workbook", label: "Food Truck Workbook" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", featured: true },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="route-strip">
        <div className="route-strip__inner">
          <span className="route-strip__service">
            Serving Jacksonville + St Augustine, FL
          </span>
          <Link href="/truck-schedule">
            Find our next stop
            <ArrowUpRightIcon className="size-4" />
          </Link>
          <a
            href="https://www.instagram.com/abouttime_creamery/"
            target="_blank"
            rel="noreferrer"
          >
            @abouttime_creamery
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>
      <div className="header-main">
        <Link
          className="brand-lockup"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            className="brand-lockup__mark"
            src="/images/creamery-logo.png"
            alt="About Time Creamery logo"
            width={64}
            height={64}
            priority
          />
          <span className="brand-lockup__type">
            <span>The Stuffed Potato Truck</span>
            <strong>+ About Time Creamery</strong>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          id="site-navigation"
          aria-label="Main navigation"
        >
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className={item.featured ? "site-nav__book" : undefined}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
