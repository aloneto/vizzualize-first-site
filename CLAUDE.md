# ESI Exata Site — Agent Instructions

## Deployment

- **Production branch:** `main` (Vercel auto-deploys on push)
- **Vercel project:** projeto-interno-teste
- **Production URL:** projeto-interno-teste.vercel.app

### Rules

1. **Always push to `main`.** Do NOT create or push to `master`. The `master` branch was deleted to avoid confusion.
2. **Always commit all source files.** If you create or modify `.ts`, `.tsx`, config, or asset files locally, they MUST be committed. Vercel builds from git — uncommitted files cause build failures.
3. **Test the build before pushing** when making structural changes: `npm run build`
4. **Do not modify `next.config.ts`, `tsconfig.json`, or `package.json`** without verifying the build passes.

## Stack

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS
- TypeScript
