export const environment = {
  github: {
    owner: "loaimasri",
    repo: "tina-demo",
    branch: "main",
    // Remove the personal token for security reasons
  },

  mongodb: {
    uri: "mongodb://mongo:27017/tinacms",
  },

  general: {
    isLocal: "false",
    debug: "true",
  },

  auth: {
    secret: "changeme", // Replace with a strong, unique secret
    discord: {
      clientId: "880470533131620422",
      clientSecret: "KWbXCp-hv7wGN_IW9Rg0_WEU4R74dFMV",
    },
  },
};
