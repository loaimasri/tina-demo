import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";
import { MongodbLevel } from "mongodb-level";
import { environment } from "./../config";

import { GitHubProvider } from "tinacms-gitprovider-github";

const {
  tina: { isLocal, debug },
  github: { branch, owner, repo, personalToken: token },
  mongodb: { uri },
} = environment;

export default isLocal
  ? createLocalDatabase()
  : createDatabase({
      gitProvider: new GitHubProvider({
        branch,
        owner,
        repo,
        token,
      }),
      databaseAdapter: new MongodbLevel<string, Record<string, unknown>>({
        collectionName: `tinacms-${branch}`,
        dbName: "tinacms",
        mongoUri: uri,
        createIfMissing: true,
        errorIfExists: false,
        keyEncoding: "utf8",
        valueEncoding: "json",
      }),

      debug: debug === "true" || false,
      namespace: branch,
    });
