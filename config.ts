export const environment = {
  github: {
    owner: process.env.GITHUB_OWNER!,
    repo: process.env.GITHUB_REPO!,
    branch: process.env.GITHUB_BRANCH!,
    personalToken: process.env.GITHUB_PERSONAL_TOKEN!,
  },

  mongodb: {
    uri: process.env.MONGODB_URI!,
  },

  tina: {
    isLocal: process.env.TINA_PUBLIC_IS_LOCAL,
    debug: process.env.TINA_PUBLIC_DEBUG,
    clientId: process.env.TINA_PUBLIC_CLIENT_ID,
    token: process.env.TINA_PUBLIC_TOKEN,
  },

  auth: {
    secret: process.env.NEXTAUTH_SECRET!,
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    },
  },
};
