FROM node:16-alpine

COPY src ./src
COPY tsconfig.json ./
COPY next.config.js ./
COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

ENV NODE_ENV production

ENV PORT='3333'
EXPOSE 3333

CMD yarn build && yarn start