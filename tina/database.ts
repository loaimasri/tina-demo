import { environment } from "./../config";
import { MongodbLevel } from "mongodb-level";
import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";

import { GitHubProvider } from "tinacms-gitprovider-github";

const isLocal = environment.general.isLocal === "true";

export default isLocal
  ? createLocalDatabase()
  : createDatabase({
      gitProvider: new GitHubProvider({
        branch: environment.github.branch,
        owner: environment.github.owner,
        repo: environment.github.repo,
        token: environment.github.personalToken,
      }),

      databaseAdapter: new MongodbLevel<string, Record<string, any>>({
        collectionName: `tinacms-${environment.github.branch}`,
        dbName: "tinacms",
        mongoUri: environment.mongodb.uri,
      }),

      debug: process.env.DEBUG === "true" || false,
      namespace: environment.github.branch,
    });
