# IdentityGuardAI frontend
`npm install && npm run dev`. Copy `.env.example` to `.env`. With `VITE_USE_MOCK=true` all data is demonstration data (shown in the top bar). Set it to `false` to call FastAPI at `VITE_API_BASE_URL`. Routes are defined in `src/services/*Service.js` and can be adjusted. Similarity scores are review-priority indicators, never proof of impersonation.
