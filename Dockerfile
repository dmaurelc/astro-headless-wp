FROM node:lts-alpine AS base
WORKDIR /app

# Enable corepack for pnpm if needed, though project uses npm based on package-lock
# COPY package.json package-lock.json ./

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "./dist/server/entry.mjs"]
