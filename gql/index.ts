import { buildSchema } from "garph";

import { resolvers } from "@/gql/resolvers";
import { g } from "@/gql/schema";

export const schema = buildSchema({ g, resolvers });

