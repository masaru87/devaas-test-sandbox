# devaas-test-sandbox

devaas (Phase 0) の E2E 動作検証用の sandbox リポジトリ。

小さな Express API が入っており、devaas が以下を安全に試せる:
- コード読解 / プラン生成
- 実装・テスト・コミット
- PR 作成 / レビュー / マージ

## セットアップ

```bash
npm install
```

## 実行

```bash
npm run dev       # 開発サーバ起動 (localhost:3000)
npm test          # テスト実行
npm run build     # TypeScript ビルド
npm start         # ビルド済みを起動
```

## エンドポイント

- `GET /hello` → `{ message: "Hello, world!" }`
- `GET /health` → `{ status: "ok" }`

## このrepoの使い方

devaas が Slack 経由でクライアントメッセージを受信し、このrepoに対して
プラン→実装→PR→マージ までの E2E を流す。
