"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";


export default function FAQPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 text-slate-800">
      {/* ヘッダー */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-sky-800">よくあるご質問</h1>
        <p className="mt-3 text-slate-600">
          各サービスについて、よくいただくご質問と回答をまとめました。
        </p>
      </header>

      {/* 採用支援 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold border-l-4 border-sky-500 pl-3">
          採用支援について
        </h2>
        <Accordion type="single" collapsible className="w-full" defaultValue="rpo">
          <AccordionItem value="rpo">
            <AccordionTrigger>RPOとは何ですか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                RPO（Recruitment Process Outsourcing）は、採用業務の一部または全体を外部の専門パートナーに委託する仕組みです。求人原稿の作成、応募者対応、面接日程調整、媒体運用などを包括的に支援し、内製の負担を軽減します。
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="recruit-pricing">
            <AccordionTrigger>料金体系はどのようになっていますか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                媒体・採用ボリューム・支援範囲により異なります。月額固定・成果報酬・ハイブリッドなど柔軟に設計可能です。まずはヒアリング後に最適プランをご提案します。
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="copy-only">
            <AccordionTrigger>原稿作成だけ依頼できますか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                可能です。職種・ターゲット・媒体特性に合わせ、専門ライターが訴求力の高い原稿を作成します。運用とセットのプランもご用意しています。
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* WEBデザイン */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold border-l-4 border-sky-500 pl-3">
          WEBデザインについて
        </h2>
        <Accordion type="single" collapsible className="w-full" defaultValue="deadline">
          <AccordionItem value="deadline">
            <AccordionTrigger>制作の納期はどれくらいですか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                規模や要件によりますが、一般的なコーポレートサイトで4〜6週間、LPは最短1〜2週間が目安です。要件定義・素材準備の進捗で短縮も可能です。
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="design-only">
            <AccordionTrigger>デザインだけの依頼は可能ですか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                可能です。Figma / XD / Illustrator などご指定の形式でデザインデータを納品します。コーディングやCMS実装を追加する拡張も可能です。
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="three-d">
            <AccordionTrigger>3Dモデリングには対応していますか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                対応しています。製品や空間の3Dビジュアル、WebGL・Three.js を用いたインタラクティブ表現の実装もご相談ください。
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* WEBスクール運営 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold border-l-4 border-sky-500 pl-3">
          WEBスクール運営について
        </h2>
        <Accordion type="single" collapsible className="w-full" defaultValue="beginner">
          <AccordionItem value="beginner">
            <AccordionTrigger>未経験でも受講できますか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                はい。未経験の方向けカリキュラムをご用意しています。WEBデザイン、WEBシステム、3Dモデリング、WEBマーケティングまで段階的に学べます。
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="online">
            <AccordionTrigger>オンラインで受講できますか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                完全オンライン対応です。録画講義＋ライブQA＋課題添削のハイブリッドで、仕事や学業と両立しやすい環境を提供します。
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="teachers">
            <AccordionTrigger>講師はどのような方ですか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                現役のデザイナー・エンジニア・マーケターが担当します。現場視点で、実務に直結するノウハウをお伝えします。
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* SNS運用代行 */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-semibold border-l-4 border-sky-500 pl-3">
          SNS運用代行について
        </h2>
        <Accordion type="single" collapsible className="w-full" defaultValue="platforms">
          <AccordionItem value="platforms">
            <AccordionTrigger>どのSNSに対応していますか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Instagram、X（旧Twitter）、TikTok、YouTube、LINE公式アカウント等に対応しています。目的・業種に合わせたプラットフォーム選定から伴走します。
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="creatives">
            <AccordionTrigger>写真や動画の制作もお願いできますか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                可能です。静止画・動画・リール等のクリエイティブを制作します。撮影が難しい場合は、素材提案や撮影サポートも行います。
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="frequency">
            <AccordionTrigger>投稿頻度や運用内容は調整できますか？</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                週1回〜毎日投稿まで柔軟に対応します。認知拡大、採用、集客など目的に応じてKPIと運用体制を設計し、レポートで改善を継続します。
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center bg-brand p-10 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-white mb-4">
          その他のご質問もお気軽にお問い合わせください
        </h3>
        <p className="text-white/90 mb-6">
          各サービスに関する詳細資料やお見積もりも無料でご案内いたします。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-sky-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
        >
          お問い合わせフォームへ
        </Link>
      </section>
    </main>
  );
}