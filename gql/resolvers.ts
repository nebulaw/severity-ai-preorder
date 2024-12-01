import { InferResolvers } from "garph";
import { YogaInitialContext } from "graphql-yoga";
import { sql } from "drizzle-orm";

import { mutationType, queryType } from "./schema";
import { db } from "../db/config";
import { preorders } from "../db/schema";

interface Preorder {
  id: number;
  email: string;
}

interface CountResult {
  count: number;
}

type Resolvers = InferResolvers<
  { Query: typeof queryType; Mutation: typeof mutationType },
  { context: YogaInitialContext }
>;

export const resolvers: Resolvers = {
  Query: {
    getPreorders: (): Preorder[] => {
      return db.select().from(preorders).all();
    },
    getPreorderCount: (): number => {
      console.log("preorder counting")
      const result: CountResult | undefined = db
        .select({ count: sql<number>`count(*)` }) // SQL expression returns a number
        .from(preorders)
        .get();
      if (!result)
        throw new Error("Could not get the count of preorders");
      return result.count;
    },
  },
  Mutation: {
    addPreorder: (_, { email }: { email: string }, __): Preorder => {
      const newPreorder: Preorder = db
        .insert(preorders)
        .values({
          email,
        })
        .returning()
        .get();

      return newPreorder;
    },
  },
};

