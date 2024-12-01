import { createYoga } from "graphql-yoga";

import { schema } from "@/gql";

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Request, Response }
});

export async function GET(req, res) {
  return await yoga.handleRequest(req, res).send(res);
}

export async function POST(req, res) {
  return await yoga.handleRequest(req, res).send(res);
}

