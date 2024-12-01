import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const preorders = sqliteTable("preorders", {
  id: integer("id").primaryKey(),
  email: text("email").notNull(),
});

