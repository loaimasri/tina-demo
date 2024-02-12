import { LocalAuthProvider, defineConfig } from "tinacms";
import { UsernamePasswordAuthJSProvider } from "tinacms-authjs/dist/tinacms";
import { environment } from "../config";
import { Global, Page, Post, User } from "./collection";

const branch =
  process.env.GITHUB_BRANCH ??
  process.env.VERCEL_GIT_COMMIT_REF ??
  process.env.HEAD ??
  "main";

const isLocal = environment.general.isLocal === "true";

export default defineConfig({
  branch,
  clientId: "1e0e2238-bff7-4a97-a01c-2b8597d735e2",
  token: "84c73d10758dcdc58b351c1c2cea7cb6dc25ced8",
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
