# devaas-test-sandbox

## プロジェクト概要

devaas (Phase 0) の E2E 動作検証用の小さな Express API。

## 技術スタック

- TypeScript (strict mode)
- Express 4
- Vitest + Supertest でテスト
- Node.js 20+

## ディレクトリ構成

```
src/
├── app.ts       # Express app を作るファクトリ関数
└── server.ts    # 起動エントリポイント
tests/
└── app.test.ts  # 各エンドポイントのテスト
```

## エンドポイント

- `GET /hello` → `{ message: "Hello, world." }`
- `GET /health` → `{ status: "ok" }`

## 開発ルール

- 新しいエンドポイントは `src/app.ts` に追加
- 各エンドポイントに対応するテストを `tests/` に追加
- TypeScript strict mode を維持
- コミット前に `npm test` を通す

## 運用

このrepoは devaas から操作される。
クライアントからのメッセージ → devaas がプラン生成 → 実装 → PR。
