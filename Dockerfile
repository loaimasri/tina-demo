FROM node:18-slim AS base

RUN yarn set version berry

WORKDIR /app

COPY . .

COPY .yarn ./.yarn
COPY .yarnrc.yml .

FROM base AS deps

RUN yarn install --immutable

FROM deps AS build

RUN yarn build

FROM base AS release

COPY --from=build /app/.next /app/.next

EXPOSE 3000

CMD ["yarn", "start"]
