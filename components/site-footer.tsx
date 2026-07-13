import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ArrowUpRightIcon } from "@/components/icons";

const footerNavigation = [
  { href: "/", label: "Home" },
  { href: "/truck-schedule", label: "Truck Schedule" },
  { href: "/catering", label: "Catering" },
  { href: "/food-truck-workbook", label: "Food Truck Workbook" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <BrandMark className="site-footer__mark" />
          <div>
            <p className="utility-label">Two cravings, one ride</p>
            <p className="site-footer__business">
              The Stuffed Potato truck + About Time Creamery
            </p>
          </div>
        </div>
        <a
          className="site-footer__instagram"
          href="https://www.instagram.com/abouttime_creamery/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            Follow along
            <strong>@abouttime_creamery</strong>
          </span>
          <ArrowUpRightIcon className="size-6" />
        </a>
      </div>

      <div className="site-footer__main">
        <address>
          <p>Serving the Jacksonville, FL and St Augustine, FL Area</p>
          <a href="mailto:Abouttimecreamery@gmail.com">
            Abouttimecreamery@gmail.com
          </a>
          <a href="mailto:Thestuffedpotatotruck@gmail.com">
            Thestuffedpotatotruck@gmail.com
          </a>
          <a href="tel:+14135621430">413-562-1430</a>
        </address>
        <nav aria-label="Footer navigation">
          <ul>
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="site-footer__legal">
        © 2026 About Time Creamery + The Stuffed Potato Truck
      </p>
    </footer>
  );
}
