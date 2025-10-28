// app/company/greeting/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ご挨拶 | 株式会社シーエント",
  description:
    "株式会社シーエント 代表ご挨拶。採用支援・WEBデザイン/スクール・SNS運用代行を通じて本質的な価値創造で貢献します。",
};

export default function GreetingPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 font-jp">
      {/* ページタイトル */}
      <header className="mb-8">
        <p className="text-xs tracking-widest text-black uppercase">greetings</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-black">ご挨拶</h1>
        <p className="mt-3 text-slate-600">
          本質を見極め、価値を創造し、社会に貢献する。
        </p>
      </header>

      {/* リードコピー */}
      <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          本質まで考えた答えを導ける組織を形成し、貢献する企業へ
        </h2>
        <p className="mt-3 leading-7 text-slate-700">
          当社は、「人と企業、デザインとテクノロジー、発信と共感」を結ぶことを使命とし、
          採用支援・WEBデザイン・WEBスクール運営・SNS運用代行の領域で事業を展開しています。
          AI やデジタルツールの進化により効率化が進む一方で、「人の心を動かす伝え方」や
          「本質的な価値づくり」がより重要になっています。私たちは単なる手法の提供ではなく、
          <span className="font-semibold">“なぜそれを行うのか”</span> を共に考え、企業と人が長期的に成長できる
          仕組みをつくることを目指します。
          これからも、技術と人の可能性を信じ、本質まで考え抜いた答えを導ける組織として成長し、
          関わるすべての方々に貢献してまいります。
        </p>
        <div className="mt-6 text-right">
          <p className="text-slate-700">株式会社シーエント</p>
          <p className="text-lg font-semibold text-slate-900">代表取締役　山田 雄也</p>
        </div>
      </section>
        {/* 代表写真・イメージ画像 */}
        <section className="relative w-full h-80 md:h-[400px] overflow-hidden rounded-2xl shadow-md">
        <Image
            src="/greeting.webp"
            alt="代表挨拶イメージ"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
        />
        <div className="absolute inset-0 bg-black/10" />
        </section>

      {/* CTA */}
      <section
        aria-labelledby="contact-cta"
        className="mt-10 rounded-2xl border border-slate-200 bg-gray-800 p-8 text-white shadow-sm"
      >
        <h2 id="contact-cta" className="text-xl font-bold tracking-tight">
          採用・WEB・SNSに関するご相談はこちらから
        </h2>
        <p className="mt-2 text-white/90">
          要件が固まっていなくても大丈夫です。現状を伺い、最適な進め方をご提案します。
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-sky-700 hover:bg-slate-100 transition"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </main>
  );
}