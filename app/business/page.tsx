'use client'


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function TabsPage() {
  // 現在のパスを取得
  const searchParams = useSearchParams();
  const tab: string | undefined = searchParams.get("tab") ?? undefined;
  return (
    <main className="font-jp">
      <section className="relative h-[80vh] w-full overflow-hidden mb-12">
        {/* 背景画像 */}
        <Image
          src="/businessHero.webp"
          alt="コーポレートサイトのヒーローイメージ"
          fill
          priority
          className="object-cover object-center"
        />
        {/* オーバーレイ（暗めフィルター） */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              事業内容
            </h1>
            <small className="text-white-500 text-sm">
              Business
            </small>
          </div>
        </div>
      </section>
      <div>
        <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">

          <Tabs defaultValue={tab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-100 rounded-lg mb-10">
              <TabsTrigger
                value="recruit"
                className="py-4 text-sm md:text-base font-semibold data-[state=active]:bg-white data-[state=active]:text-black"
              >
                採用支援事業
              </TabsTrigger>
              <TabsTrigger
                value="webdesign"
                className="py-4 text-sm md:text-base font-semibold data-[state=active]:bg-white data-[state=active]:text-black"
              >
                WEBデザイン事業
              </TabsTrigger>
              <TabsTrigger
                value="sns"
                className="py-4 text-sm md:text-base font-semibold data-[state=active]:bg-white data-[state=active]:text-black"
              >
                SNS運用代行事業
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recruit" className="mt-6 text-black space-y-4">
              {/* Hero セクション */}
              <section className="mb-12 text-left">
                <h1 className="text-3xl font-bold text-black">採用支援事業</h1>
                <p className="mt-3 text-slate-600">
                  企業と求職者を最適にマッチングさせるため、戦略立案から運用・改善までをワンストップで支援します。
                </p>
              </section>

              {/* 概要セクション */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                  採用活動を、もっと戦略的に、もっとスムーズに。
                </h2>
                <p>
                  当社の採用支援事業では、企業と求職者を最適にマッチングさせるために、
                  採用戦略の立案から求人原稿作成、広告運用、そして採用業務の代行（RPO）までを
                  一気通貫でサポートします。
                </p>
                <p>
                  採用活動においては「スピード」「精度」「継続性」が重要です。
                  弊社では専門のライターと運用チームが連携し、職種・地域・ターゲット層に合わせた
                  訴求力の高い求人原稿を制作。各種求人媒体の広告運用では、データ分析をもとに
                  効果改善を継続的に行います。
                </p>
              </section>

              {/* サービス内容 */}
              <section className="mt-12 space-y-4">
                <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                  提供サービス
                </h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>求人原稿の作成（職種・ターゲットに合わせたライティング）</li>
                  <li>求人広告の運用・分析・改善提案</li>
                  <li>RPO（採用業務代行）による効率的な採用プロセス構築</li>
                </ul>
              </section>

              {/* 成果・価値訴求セクション */}
              <section className="mt-12 space-y-6">
                <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                  採用活動の成果を最大化するために
                </h2>
                <p>
                  応募者の質を高め、採用担当者の業務負担を軽減しながら、
                  貴社の採用活動を戦略的かつ持続的に支援します。
                </p>
                <p>
                  データドリブンなアプローチで、採用費用対効果の最適化と、
                  自社にマッチした人材の確保を実現します。
                </p>
              </section>

              {/* CTA */}
              <section className="mt-16 text-center bg-brand p-10 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-4">
                  採用でお悩みの企業様へ
                </h3>
                <p className="text-white/90 mb-6">
                  貴社の現状に合わせた採用戦略をご提案いたします。まずはお気軽にご相談ください。
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-sky-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
                >
                  無料相談・お問い合わせ
                </a>
              </section>
            </TabsContent>

            <TabsContent value="webdesign" className="mt-6 text-black space-y-4">
              {/* Hero セクション */}
              <section className="mb-12 text-left">
                <h1 className="text-3xl font-bold text-black">WEBデザイン事業</h1>
                <p className="mt-3 text-slate-600">
                  ブランドの価値を「見える形」に。デザインとテクノロジーで、企業と顧客をつなぐWEBソリューションを提供します。
                </p>
              </section>

              {/* 概要セクション */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                  伝わるデザインで、ブランドの魅力を最大化
                </h2>
                <p>
                  当社のWEBデザイン事業では、単なる「見た目の美しさ」だけでなく、
                  ブランドの想いや事業の強みを正確に伝える“機能するデザイン”を重視しています。
                  コーポレートサイトやランディングページ、ECサイトなど、目的に応じた最適な構成とUI/UXを設計します。
                </p>
                <p>
                  また、3Dモデリングやアニメーションなど、視覚的な体験価値を高める表現にも対応。
                  ユーザーが思わず惹きつけられるようなデジタル体験を実現します。
                </p>
              </section>

              {/* サービス内容 */}
              <section className="mt-12 space-y-4">
                <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                  提供サービス
                </h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>WEBサイト・LPのデザインおよび構築</li>
                  <li>3Dモデリング・ビジュアル制作</li>
                  <li>WEBマーケティング（SEO・広告運用・SNS連携）</li>
                  <li>WEBスクール運営（デザイン・プログラミング・マーケティング）</li>
                </ul>
              </section>

              {/* 成果・価値訴求セクション */}
              <section className="mt-12 space-y-6">
                <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                  成果につながるデザイン戦略を
                </h2>
                <p>
                  私たちは、デザインを「目的達成のための手段」と考えています。
                  単なる制作ではなく、データ分析やユーザー行動の理解をもとに、
                  サイト全体の導線やコンテンツ設計を行い、成果へと導くデザインを実現します。
                </p>
                <p>
                  さらに、自社運営のスクールを通じて、デジタル人材の育成にも取り組んでいます。
                  デザイン・開発・マーケティングを横断的に学び、実務に直結するスキルを持つ人材を輩出しています。
                </p>
              </section>

              {/* CTA */}
              <section className="mt-16 text-center bg-brand p-10 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-4">WEB制作・デザインのご相談を承ります</h3>
                <p className="text-white/90 mb-6">
                  新規サイトの立ち上げやリニューアル、ブランド設計、3Dコンテンツ制作など、幅広く対応いたします。
                  まずはお気軽にご相談ください。
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-sky-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
                >
                  無料相談・お問い合わせ
                </a>
              </section>
            </TabsContent>
            <TabsContent value="sns" className="mt-6 text-black space-y-4">
              {/* Hero セクション */}
              <section className="mb-12 text-left">
                <h1 className="text-3xl font-bold text-black">SNS運用代行事業</h1>
                <p className="mt-3 text-slate-600">
                  戦略設計からクリエイティブ制作、投稿運用、分析・改善まで。
                  SNSを通じてブランドの「ファン」を育てるマーケティングを支援します。
                </p>
              </section>

              {/* 概要セクション */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                  共感を生むSNS戦略で、ブランドのファンを育てる
                </h2>
                <p>
                  当社のSNS運用代行事業では、企業やブランドの個性を正しく伝え、ターゲットに
                  「共感」される発信を実現します。SNSは単なる告知手段ではなく、
                  企業の世界観を発信し、ファンとの関係を深めるための重要なプラットフォームです。
                </p>
                <p>
                  戦略設計からコンテンツ制作、投稿、分析・改善まで一貫してサポート。
                  各SNSのアルゴリズムやトレンドを踏まえ、成果につながる運用体制を構築します。
                </p>
              </section>

              {/* サービス内容 */}
              <section className="mt-12 space-y-4">
                <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                  提供サービス
                </h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>SNS戦略設計（ターゲット分析・運用方針の策定）</li>
                  <li>クリエイティブ制作（画像・動画・リールコンテンツなど）</li>
                  <li>投稿代行・スケジュール管理</li>
                  <li>レポーティング・分析・改善提案</li>
                  <li>インフルエンサー・広告活用支援</li>
                </ul>
              </section>

              {/* 成果・価値訴求セクション */}
              <section className="mt-12 space-y-6">
                <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                  数字ではなく「ファン」をつくるSNS運用
                </h2>
                <p>
                  私たちは、フォロワー数や再生回数だけを追う運用ではなく、
                  ブランドに共感し、長期的に応援してくれるファンを育てることを目的としています。
                  投稿一つひとつにストーリー性を持たせ、企業の想いをSNS上で可視化します。
                </p>
                <p>
                  また、データドリブンな改善を継続することで、
                  エンゲージメント率の向上とブランド認知の拡大を同時に実現します。
                  SNSを「広報」から「資産」へ変える運用を提供します。
                </p>
              </section>

              {/* CTA */}
              <section className="mt-16 text-center bg-brand p-10 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-4">
                  SNS運用の最適化でブランド価値を高めませんか？
                </h3>
                <p className="text-white/90 mb-6">
                  Instagram・X（旧Twitter）・TikTok・YouTubeなど、
                  各プラットフォームの特性に合わせた運用をご提案します。
                  戦略立案から制作・運用・改善まで、一括でお任せください。
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-sky-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
                >
                  無料相談・お問い合わせ
                </a>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
