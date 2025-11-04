"use client";

import Image from "next/image";
import Link from "next/link";

export default function RecruitPage() {
    return (
        <main className="font-jp">
            {/* Heroセクション */}
            <section className="relative h-[60vh] w-full overflow-hidden mb-12">
                <Image
                    src="/recruit.webp"
                    alt="求人ページのヒーローイメージ"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="max-w-3xl text-center text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                            採用について
                        </h1>
                        <small className="text-white-500 text-sm">
                            Recruit
                        </small>
                    </div>
                </div>
                {/* <p className="mt-3 text-slate-600">
          シーエントでは、共に成長し、社会に価値を生み出す仲間を募集しています。
        </p> */}
            </section>
            <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
                <section className="mb-16 space-y-6">
                    <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                        人と、挑戦と、成長をつなぐ
                    </h2>
                    <p>
                        私たちシーエントは、「人の可能性を最大化し、企業と社会に価値を届ける」という理念のもと、
                        採用支援・WEBデザイン・SNS運用など、多角的な事業を展開しています。
                    </p>
                    <p>
                        私たちが大切にしているのは、「目的を持って考え、行動できる人」。
                        立場や経験に関係なく、誰もが意見を出し合い、共に学び合う文化があります。
                        新しいアイデアを歓迎し、自ら動くことを楽しめる方と一緒に成長していきたいと考えています。
                    </p>
                </section>

                {/* 募集職種・働く環境 */}
                <section className="mb-16 space-y-6">
                    <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                        募集職種・働く環境
                    </h2>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>WEBデザイナー / フロントエンドエンジニア</li>
                        <li>採用コンサルタント / キャリアアドバイザー</li>
                        <li>SNSマーケター / コンテンツプランナー</li>
                    </ul>
                    <p className="text-slate-700">
                        経験者の方はもちろん、未経験からスタートしたメンバーも活躍中。
                        一人ひとりが自分らしく働ける環境を大切にしています。
                    </p>
                </section>

                {/* 企業文化・働き方 */}
                <section className="mb-16 space-y-6">
                    <h2 className="text-2xl font-semibold text-black border-l-4 border-sky-500 pl-3">
                        シーエントの働き方
                    </h2>
                    <p>
                        フルリモートやフレックスタイム制を取り入れ、柔軟な働き方を推進しています。
                        社員一人ひとりのライフスタイルを尊重しながら、
                        パフォーマンスを最大限発揮できる環境を整えています。
                    </p>
                    <p>
                        チーム内では日々のオンラインMTGやSlackでの情報共有を行い、
                        離れていても協力し合える体制を構築しています。
                    </p>
                </section>

                {/* CTAセクション */}
                <section className="mt-20 text-center bg-brand p-10 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        あなたの挑戦を、<br />シーエントで。
                    </h3>
                    <p className="text-white/90 mb-8">
                        現在募集中の職種や応募条件の詳細は、採用サイトにてご確認いただけます。
                        私たちと一緒に、新しい価値を生み出していきましょう。
                    </p>

                    {/* 外部リンクボタン（例：Indeed, Wantedly, Greenなど） */}
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="https://www.indeed.com/company/cent" // ← 採用ページURLを入れてください
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-sky-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
                        >
                            Indeedで募集を見る
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-sky-700 transition"
                        >
                            お問い合わせはこちら
                        </Link>
                    </div>
                </section>
            </div>
        </main >
    );
}
