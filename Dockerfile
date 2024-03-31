FROM node:18-slim AS base

RUN yarn set version berry

WORKDIR /app

COPY . .

FROM base AS deps

RUN --mount=type=cache,target=/app/.yarn/cache yarn install --immutable

FROM deps AS build

RUN --mount=type=cache,target=/app/.yarn/cache yarn install --immutable

RUN yarn build

FROM base AS release

COPY --from=build /app/.next /app/.next

EXPOSE 3000

CMD ["yarn", "start"]
