module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        jp: [
          "ヒラギノ角ゴ Pro W3",
          "Hiragino Kaku Gothic Pro",
          "メイリオ",
          "Meiryo",
          "sans-serif",
        ],
      },
      colors: {
        brand: "#19c8c6", // ← 独自カラー（例：企業テーマカラーなど）
      },
    },
  },
  plugins: [],
};
