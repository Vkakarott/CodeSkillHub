import { create } from "domain";
import { integer, pgTable, varchar, text, jsonb, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    image: varchar({ length: 255 }),
    interests: jsonb().default([]),
    preferences: jsonb().default([]),
    created_at: timestamp().defaultNow(),
    updated_at: timestamp().defaultNow(),
});

export const recommendationsTable = pgTable("recommendations", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({ length: 255 }).notNull(),
    description: text().notNull(),
    url: varchar({ length: 255 }).notNull(),
    userId: integer().notNull().references(() => usersTable.id),
    createdAt: timestamp().defaultNow(),
});
  

export const ratingsTable = pgTable("ratings", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: integer().notNull().references(() => usersTable.id),
    recommendationId: integer().notNull().references(() => recommendationsTable.id),
    rating: integer().notNull(),
    review: text(),
    createdAt: timestamp().defaultNow(),
});
