import { ServiceCard } from "@/app/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { AcademicCapIcon, ComputerDesktopIcon, MegaphoneIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-jp">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* 背景画像 */}
        <Image
          src="/top_heroImage.webp"
          alt="コーポレートサイトのヒーローイメージ"
          fill
          priority
          className="object-cover object-center"
        />

        {/* オーバーレイ（暗めフィルター） */}
        <div className="absolute inset-0 bg-black/40" />

        {/* テキストコンテンツ */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            「つながりが生まれる、未来への入り口。」
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
            採用支援・Webデザイン・スクール運営を通じて、<br />
            ビジネスの未来を共に創造します。
          </p>
          <a
            href="#contact"
            className="mt-8 rounded-full bg-[#19c8c6] px-8 py-3 text-lg font-semibold text-white hover:bg-cyan-600 transition"
          >
            お問い合わせ
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">事業内容</h2>
        <p className="mt-2 text-slate-600">課題と目的に合わせて、専門チームが伴走します。</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ServiceCard
            imageSrc="/recruit.webp"
            imageAlt="採用支援のイメージ"
            title="採用支援"
            description="求人原稿の最適化から媒体運用、RPO（採用業務代行）まで、一気通貫で支援します。"
            items={["求人原稿の作成", "求人広告運用", "RPO（採用業務代行）"]}
            href="/business?tab=recruit"
            Icon={UsersIcon}
          />

          <ServiceCard
            imageSrc="/webdesign.webp"
            imageAlt="WEBデザインのイメージ"
            title="WEBデザイン"
            description="コーポレートサイトやLPを、情報設計とUIで成果につなげます。"
            items={["WEBエンジニアリング / WEBシステム", "WEBマーケティング"]}
            href="/business?tab=webdesign"
            Icon={ComputerDesktopIcon}
          />

          <ServiceCard
            imageSrc="/school.webp"
            imageAlt="WEBスクール運営のイメージ"
            title="WEBデザインのスクール運営"
            description="実務直結のカリキュラムで即戦力を育成。法人研修にも対応します。"
            items={["WEBデザイン / WEBシステム", "3Dモデリング", "WEBマーケティング"]}
            href="/business?tab=webdesign"
            Icon={AcademicCapIcon}
          />

          <ServiceCard
            imageSrc="/sns.webp"
            imageAlt="SNS運用代行のイメージ"
            title="SNS運用代行"
            description="戦略設計からクリエイティブ作成、投稿運用、レポーティングまで一括支援。"
            items={["クリエイティブ作成", "投稿スケジュール設計", "運用・分析レポート"]}
            href="/business?tab=sns"
            Icon={MegaphoneIcon}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">ご支援の流れ</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-5 text-slate-700">
            {["お問い合わせ", "要件ヒアリング", "ご提案・お見積り", "実行・運用", "レポート/改善"].map((step, i) => (
              <li key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="text-xs font-semibold text-sky-700">STEP {i + 1}</span>
                <p className="mt-2 font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 text-white">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">まずはお気軽にご相談ください</h2>
          <p className="mt-2 text-slate-100/90">
            具体的な課題が固まっていなくても大丈夫です。初回相談・簡易診断は無料です。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="text-md bg-[#19c8c6] text-gray-900 hover:bg-cyan-600">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
