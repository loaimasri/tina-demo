import { LocalAuthProvider, defineConfig } from "tinacms";
import { UsernamePasswordAuthJSProvider } from "tinacms-authjs/dist/tinacms";
import { environment } from "../config";
import { Global, Page, Post, User } from "./collection";

const {
  github: { branch },
  tina: { isLocal, clientId, token },
} = environment;

export default defineConfig({
  branch,
  clientId,
  token,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
      static: true,
    },
  },
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  contentApiUrlOverride: "/api/tina/gql",

  schema: {
    collections: [Post, Page, Global, User],
  },
});
