import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";
import { MongodbLevel } from "mongodb-level";
//import { RedisClient } from "redis";
import { GitHubProvider } from "tinacms-gitprovider-github";
import { environment } from "./../config";

const isLocal = environment.general.isLocal === "true";

// const redisClient = new RedisClient({
//   // Replace with the hostname or IP address of your Redis container
//   host: "tinacms_redis_1",
//   // Replace with the port your Redis container is exposed on (default: 6379)
//   port: 6379,
// });

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
      }),

      debug: process.env.DEBUG === "true" || false,
      namespace: environment.github.branch,
    });
