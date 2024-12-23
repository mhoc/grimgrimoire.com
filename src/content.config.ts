import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const evolutions = defineCollection({
  loader: file("src/content/evolutions.json"),
  schema: z.object({
    id: z.string(),
    left: z.array(
      z.object({
        id: z.string(),
        max: z.union([z.null(), z.undefined(), z.boolean()]),
      })
    ),
    right: z.array(
      z.object({
        id: z.string(),
        max: z.union([z.null(), z.undefined(), z.boolean()]),
      })
    ),
  }),
});

const weapons = defineCollection({
  loader: file("src/content/weapons.json"),
  schema: z.object({
    description: z.string(),
    id: z.string(),
    ignores: z.union([z.null(), z.undefined(), z.string()]),
    name: z.string(),
    stage_item_on: z.union([z.null(), z.undefined(), z.string()]),
    starting_weapon_for: z.union([z.null(), z.undefined(), z.string()]),
    type: z.enum(["weapon", "passive"]),
    unlock_via: z.string(),
  }),
});

export const collections = { evolutions, weapons };
