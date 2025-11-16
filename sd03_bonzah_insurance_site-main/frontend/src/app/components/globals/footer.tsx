import Image from "next/image";
import Link from "next/link";
// comment for adding
export default function Footer() {
  const insuranceQuotes = [
    { label: "Get a Quote", href: "/#embeddedQuoter" },
    { label: "Auto Insurance", href: "/insurance-types/auto-insurance" },
    { label: "Home Insurance", href: "/insurance-types/home-insurance" },
    { label: "Renters Insurance", href: "/insurance-types/renters-insurance" },
    { label: "Classic/Collector Insurance", href: "/insurance-types/classic-collector-insurance" },
    { label: "Business Insurance", href: "/insurance-types/business-insurance" },
    { label: "RV Insurance", href: "/insurance-types/rv-insurance" },
    { label: "Motorcycle Insurance", href: "/insurance-types/motorcycle-insurance" },
    { label: "Non-Owners Insurance", href: "/insurance-types/non-owners-insurance" },
  ];

  const embeddedInsurance = [{ label: "Become a Partner", href: "/become-a-partner" }];

  const support = [
    { label: "Contact Us", href: "/#contact" },
    { label: "FAQs", href: "/#faq" },
    { label: "File a Claim", href: "/file-a-claim" },
  ];

  const company = [
    { label: "About Us", href: "/components/about" },
    { label: "Insurance Licenses", href: "/insurance-licenses" },
  ];
  
  const socials = [
    { name: "Facebook", href: "https://www.facebook.com/bonzahcom/", src: "/images/facebook-svgrepo-com.svg" },
    { name: "X", href: "https://x.com/Bonzahcom", src: "/images/X_logo_2023_(white).png" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/bonzah/", src: "/images/linkedin-linked-in-svgrepo-com.svg" },
    { name: "Instagram", href: "https://www.instagram.com/bonzahfeeling/", src: "/images/instagram-svgrepo-com.svg" },
  ];

  const linkBase = "transition-colors text-[var(--color-light-grey)] visited:text-[var(--color-light-grey)] hover:text-[var(--color-white)] text-[15px] leading-7 xl:whitespace-nowrap";

  return (
    <footer className="bg-[var(--color-black)]">
      <div className="mx-auto max-w-[1600px] 2xl:max-w-[1760px] px-4 py-16 text-[var(--color-light-grey)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_repeat(4,minmax(0,1fr))] gap-8 lg:gap-10 xl:gap-12 items-start">
          <div>
            <div className="flex items-center gap-4">
              <Image src="/partners/bonzah_logo.svg" alt="Bonzah" width={200} height={45} priority className="h-10 w-auto" />
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--color-light-grey)]">
              Bonzah Insurance adapts to your lifestyle and protects what matters most.
            </p>
            <div className="mt-4 flex items-center gap-4">
              {socials.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Image src={social.src} alt={`${social.name} logo`} width={24} height={24} className="opacity-70 hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
          <nav>
            <h3 className="text-[var(--color-white)] font-semibold">Insurance Quotes</h3>
            <ul className="mt-4 space-y-2">{insuranceQuotes.map((i) => (<li key={i.label}><Link className={linkBase} href={i.href}>{i.label}</Link></li>))}</ul>
          </nav>
          <nav>
            <h3 className="text-[var(--color-white)] font-semibold">Embedded Insurance</h3>
            <ul className="mt-4 space-y-2">{embeddedInsurance.map((i) => (<li key={i.label}><Link className={linkBase} href={i.href}>{i.label}</Link></li>))}</ul>
          </nav>
          <nav>
            <h3 className="text-[var(--color-white)] font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">{support.map((i) => (<li key={i.label}><Link className={linkBase} href={i.href}>{i.label}</Link></li>))}</ul>
          </nav>
          <nav>
            <h3 className="text-[var(--color-white)] font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">{company.map((i) => (<li key={i.label}><Link className={linkBase} href={i.href}>{i.label}</Link></li>))}</ul>
          </nav>
        </div>
        <div className="mt-10 border-t" style={{ borderColor: "rgba(255,255,255,.12)" }} />
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm">
          <p className="max-w-3xl leading-6 text-[var(--color-light-grey)]/90">
            Bonzah Inc. dba Bonzah Insurance is a licensed insurance agency. Coverage options and discounts vary by state and are not available everywhere. Refer to your policy for precise coverage details and limitations.
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link className={linkBase} href="/terms">Terms of Service</Link>
            <Link className={linkBase} href="/privacy">Privacy Policy</Link>
            <Link className={linkBase} href="/cookies">Cookie Policy</Link>
          </nav>
        </div>
        <p className="mt-4 text-xs text-[var(--color-light-grey)]/80">
          © {new Date().getFullYear()} Bonzah Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}