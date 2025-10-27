// components/site/Footer.tsx
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type NavGroup = { title: string; items: { label: string; href: string }[] };
type Socials = Partial<{ x: string; github: string; linkedin: string; facebook: string; instagram: string }>;

interface FooterProps {
  company: {
    name: string;
    legalName?: string;
    address?: string;
    phone?: string;
    email?: string;
  };
  nav?: NavGroup[];
}

export default function Footer({ company, nav = []}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="font-jp border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* 上段：会社情報 + ナビ */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* 会社情報 */}
          <section aria-labelledby="footer-company" className="space-y-3 text-slate-700">
            <div>
                <h2 id="footer-company" className="text-lg font-bold text-slate-900 tracking-tight">
                {company.legalName ?? company.name}
                </h2>
            </div>
            {company.address && (
              <p className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-5 w-5 text-slate-500" />
                <span>{company.address}</span>
              </p>
            )}
            <ul className="space-y-2">
              {company.phone && (
                <li className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-slate-500" />
                  <a className="hover:underline" href={`tel:${company.phone.replace(/-/g, "")}`}>
                    {company.phone}
                  </a>
                </li>
              )}
              {company.email && (
                <li className="flex items-center gap-2">
                  <EnvelopeIcon className="h-5 w-5 text-slate-500" />
                  <a className="hover:underline" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </li>
              )}
            </ul>
          </section>

          {/* サイトナビ（最大2カラム） */}
          <nav
            aria-label="フッターナビゲーション"
            className="md:col-span-2 grid grid-cols-2 gap-8 text-sm text-slate-700"
          >
            {nav.map((group) => (
              <div key={group.title} className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-sky-700 hover:underline underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* 仕切り線 */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* 下段：コピーライト + 法務リンク + SNS */}
        <div className="flex flex-col items-start gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {year} {company.name}. All rights reserved.</p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className="hover:text-sky-700 hover:underline underline-offset-4">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-sky-700 hover:underline underline-offset-4">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:text-sky-700 hover:underline underline-offset-4">
                特定商取引法に基づく表記
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}