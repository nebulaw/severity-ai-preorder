import { GarphSchema } from "garph";

export const g = new GarphSchema();

export const PreorderGQL = g.type("Preorder", {
  id: g.int(),
  email: g.string(),
});

export const queryType = g.type("Query", {
  getPreorders: g.ref(PreorderGQL).list().description("Gets an array of preorders"),
  getPreorderCount: g.int().description("Gets the total number of preorders"),
});

export const mutationType = g.type("Mutation", {
  addPreorder: g
    .ref(PreorderGQL)
    .args({
      email: g.string(),
    })
    .description("Adds a new preorder"),
  removePreorder: g
    .ref(PreorderGQL)
    .optional()
    .args({
      id: g.int(),
    })
    .description("Removes an existing preorder"),
});


