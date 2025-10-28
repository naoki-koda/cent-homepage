// app/contact/page.tsx
const inquiryTypes = [
  { value: "service", label: "サービスに関するお問い合わせ" },
  { value: "estimate", label: "お見積り・資料請求" },
  { value: "media", label: "メディア取材について" },
  { value: "recruit", label: "採用について" },
  { value: "other", label: "その他" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">お問い合わせ</h1>
        <p className="mt-4 text-sm text-slate-600">
          下記フォームに必要事項をご入力のうえ送信してください。内容を確認のうえ、担当者よりご連絡いたします。
        </p>
      </header>

      <form className="mt-10 grid gap-8 text-sm text-slate-800">
        <fieldset className="grid gap-4">
          <legend className="text-base font-semibold text-slate-900">
            お問い合わせ種別<span className="ml-2 text-xs text-red-600">必須</span>
          </legend>
          <div className="grid gap-2 md:grid-cols-2">
            {inquiryTypes.map((type) => (
              <label
                key={type.value}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 transition hover:border-slate-300"
              >
                <input
                  type="radio"
                  name="inquiryType"
                  value={type.value}
                  required
                  className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-500"
                />
                <span className="text-sm font-medium text-slate-900">{type.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-6">
          <div className="grid gap-1">
            <label className="text-sm font-semibold" htmlFor="company">
              会社名<span className="ml-2 text-xs text-red-600">必須</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              placeholder="例：株式会社〇〇"
              className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-semibold" htmlFor="department">
              部署名
            </label>
            <input
              id="department"
              name="department"
              type="text"
              placeholder="例：マーケティング部"
              className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div className="grid gap-1 md:grid-cols-2 md:gap-6">
            <div className="grid gap-1">
              <label className="text-sm font-semibold" htmlFor="name">
                ご担当者名<span className="ml-2 text-xs text-red-600">必須</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="例：山田 太郎"
                className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-sm font-semibold" htmlFor="kana">
                ご担当者名（フリガナ）
              </label>
              <input
                id="kana"
                name="kana"
                type="text"
                placeholder="例：ヤマダ タロウ"
                className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-1 md:grid-cols-2 md:gap-6">
            <div className="grid gap-1">
              <label className="text-sm font-semibold" htmlFor="email">
                メールアドレス<span className="ml-2 text-xs text-red-600">必須</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="例：contact@example.com"
                className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-sm font-semibold" htmlFor="phone">
                お電話番号
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="例：03-1234-5678"
                className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-semibold" htmlFor="how">
              当社をお知りになったきっかけ
            </label>
            <input
              id="how"
              name="how"
              type="text"
              placeholder="例：ウェブ検索／ご紹介など"
              className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-semibold" htmlFor="message">
              お問い合わせ内容<span className="ml-2 text-xs text-red-600">必須</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="お問い合わせ内容をご記入ください"
              className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-600">
          <p>
            ご入力いただいた個人情報は、当社プライバシーポリシーに基づき厳重に管理いたします。内容により回答にお時間を要する場合がございます。
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-500"
          />
          <label htmlFor="privacy">
            <span className="font-medium text-slate-800">個人情報保護方針</span>に同意する
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-slate-900 px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-slate-700"
        >
          入力内容を送信する
        </button>
      </form>
    </main>
  );
}
