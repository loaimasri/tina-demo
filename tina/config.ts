import { LocalAuthProvider, defineConfig } from "tinacms";
import { UsernamePasswordAuthJSProvider } from "tinacms-authjs/dist/tinacms";
import { environment } from "../config";
import { Global, Page, Post, User } from "./collection";

const branch = environment.github.branch;

const isLocal = environment.general.isLocal === "true";

export default defineConfig({
  branch,

  clientId: "8190a777-923e-4fba-958d-e6e8b4db8414",
  token: "1f59a0b9dc34482e163db5a6fdc5b8e8640a87a4",
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
