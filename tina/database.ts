import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";
import { MongodbLevel } from "mongodb-level";
import { environment } from "./../config";

import { GitHubProvider } from "tinacms-gitprovider-github";

const isLocal = environment.general.isLocal === "true";

export default isLocal
  ? createLocalDatabase()
  : createDatabase({
      gitProvider: new GitHubProvider({
        branch: environment.github.branch,
        owner: environment.github.owner,
        repo: environment.github.repo,
        token:
          process.env.GITHUB_PERSONAL_ACCESS_TOKEN! ??
          environment.github.personalToken,
      }),

      databaseAdapter: new MongodbLevel<string, Record<string, unknown>>({
        collectionName: `tinacms-${environment.github.branch}`,
        dbName: "tinacms",
        mongoUri: environment.mongodb.uri,
        createIfMissing: true,
        errorIfExists: false,
        keyEncoding: "utf8",
        valueEncoding: "json",
      }),

      debug: process.env.DEBUG === "true" || false,
      namespace: environment.github.branch,
    });
