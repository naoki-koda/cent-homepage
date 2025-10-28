// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 株式会社シーエント",
  description:
    "株式会社シーエントのプライバシーポリシー。個人情報の取扱い、利用目的、第三者提供、Cookie、保有期間、ユーザーの権利などについて定めています。",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const company = {
    name: "株式会社シーエント",
    // 決まり次第更新
    address: "所在地：未定（決定次第、当ページでお知らせします）",
    email: "info@c-ent.co.jp",
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 font-jp text-slate-800">
      {/* パンくず（任意） */}
      <nav aria-label="breadcrumb" className="mb-6 text-sm text-slate-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">プライバシーポリシー</li>
        </ol>
      </nav>

      {/* タイトル */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-sky-800">プライバシーポリシー</h1>
        <p className="mt-3 text-slate-600">
          {company.name}（以下「当社」）は、当社が提供するウェブサイトおよび各種サービス（以下「本サービス」）における
          利用者等の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
        </p>
      </header>

      {/* 1. 収集する情報 */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">1. 収集する情報</h2>
        <p>当社は、以下の情報を取得する場合があります。</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>氏名、会社名、役職、メールアドレス、電話番号、住所等の連絡先情報</li>
          <li>お問い合わせ内容、商談履歴、アンケート回答等のコミュニケーション情報</li>
          <li>アクセスログ（IPアドレス、Cookie、ブラウザ/端末情報、リファラ、閲覧ページ、利用日時 等）</li>
          <li>SNS連携時に当該プラットフォームから提供される公開プロフィール情報（同意範囲内）</li>
          <li>採用応募時の履歴書・職務経歴書等の採用関連情報</li>
        </ul>
      </section>

      {/* 2. 利用目的 */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">2. 個人情報の利用目的</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>お問い合わせへの回答、資料送付、見積・提案等の営業活動の実施</li>
          <li>本サービスの提供・維持・改善、新機能の開発、品質向上のための分析</li>
          <li>セミナー/イベント/キャンペーンの案内、メールマガジン等の配信</li>
          <li>不正行為の防止、セキュリティの確保、法令・規約違反への対応</li>
          <li>採用選考、連絡、入社手続等の実施</li>
          <li>法令に基づく対応およびこれに付随する目的</li>
        </ul>
      </section>

      {/* 3. 法的根拠（必要に応じて） */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">3. 処理の法的根拠（EU/UK向け）</h2>
        <p>
          EU/UK域内の利用者の個人データについては、同意、契約の履行、正当な利益、法的義務の履行等を根拠として処理します。
          必要に応じ、取得時に個別に同意を求めることがあります。
        </p>
      </section>

      {/* 4. 第三者提供・委託 */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">4. 第三者提供・共同利用・委託</h2>
        <p>当社は、以下の場合を除き、本人の同意なく個人情報を第三者に提供しません。</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>法令に基づく場合</li>
          <li>人の生命・身体・財産の保護のために必要で、本人同意が困難な場合</li>
          <li>公衆衛生の向上・児童の健全育成のために特に必要な場合</li>
          <li>国の機関等の法令に基づく事務への協力が必要な場合</li>
        </ul>
        <p className="mt-2">
          また、当社は業務遂行上必要な範囲で、適切な管理のもと業務委託先に取扱いを委託することがあります。
        </p>
      </section>

      {/* 5. Cookie等の利用 */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">5. Cookie等の利用について</h2>
        <p>
          本サービスでは、利便性向上やアクセス解析、広告配信最適化のためにCookieや類似技術を使用する場合があります。
          ブラウザ設定によりCookieの受け入れを拒否できますが、一部機能が正しく動作しない可能性があります。
        </p>
      </section>

      {/* 6. アナリティクス・広告 */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">6. アクセス解析・広告配信ツール</h2>
        <p>
          当社はアクセス解析や広告配信のため、第三者の提供するツール（例：Google Analytics 等）を利用する場合があります。
          これらの事業者におけるデータ取扱いについては各事業者のポリシーをご確認ください。
        </p>
      </section>

      {/* 7. 安全管理措置 */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">7. 安全管理措置</h2>
        <p>
          当社は、個人情報の漏えい・滅失・毀損等の防止およびその他の安全管理のため、組織的・人的・物理的・技術的安全管理措置を講じます。
          また、従業者・委託先に対して必要かつ適切な監督を行います。
        </p>
      </section>

      {/* 8. 保有期間 */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">8. 保有期間</h2>
        <p>
          収集した個人情報は、利用目的の達成に必要な範囲で保有し、目的達成後は適切な方法で消去・匿名化等を行います。
          ただし、法令で保存期間が定められている場合はこの限りではありません。
        </p>
      </section>

      {/* 9. 未成年者の個人情報 */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">9. 未成年者の個人情報</h2>
        <p>
          15歳未満の方が本サービスを利用する場合、保護者の同意を得た上で個人情報を提供してください。
        </p>
      </section>

      {/* 10. 利用者の権利 */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">10. 開示・訂正・利用停止等の請求</h2>
        <p>
          当社は、本人からの個人情報の開示、訂正、追加、削除、利用停止、第三者提供の停止等の請求に適切に対応します。
          下記「お問い合わせ窓口」までご連絡ください。なお、法令に基づきご本人確認を行う場合があります。
        </p>
      </section>

      {/* 11. 国際移転（必要に応じて） */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">11. パーソナルデータの国外移転</h2>
        <p>
          業務委託やクラウドサービスの利用等に伴い、取得した個人データを国外で取扱う場合があります。
          この場合、適用法令に従い、適切な保護措置を講じます。
        </p>
      </section>

      {/* 12. 本ポリシーの変更 */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">12. 本ポリシーの変更</h2>
        <p>
          当社は、法令の改正や運用状況の変更等に応じて、本ポリシーを改定することがあります。
          重要な変更がある場合は、本ウェブサイト上で通知します。
        </p>
      </section>

      {/* お問い合わせ */}
      <section className="mb-12 space-y-3">
        <h2 className="text-2xl font-semibold border-l-4 border-sky-500 pl-3">お問い合わせ窓口</h2>
        <p>{company.name}</p>
        <p>{company.address}</p>
        <p>メールアドレス：<a href={`mailto:${company.email}`} className="text-sky-700 hover:underline">{company.email}</a></p>
      </section>

      {/* 施行日 */}
      <p className="text-sm text-slate-500">
        施行日：2025年10月28日（最終更新日：2025年10月28日）
      </p>
    </main>
  );
}