import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const characters = defineCollection({
  loader: file("src/content/characters.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

const evolutions = defineCollection({
  loader: file("src/content/evolutions.json"),
  schema: z.object({
    id: z.string(),
    left: z.array(
      z.object({
        character: z.union([ z.undefined(), z.string() ]),
        note: z.union([ z.undefined(), z.string()]),
        relic: z.union([ z.undefined(), z.string() ]),
        other: z.union([ z.undefined(), z.string() ]),
        weapon: z.union([ z.undefined(), z.string() ]),
      })
    ),
    right: z.array(
      z.object({
        character: z.union([ z.undefined(), z.string() ]),
        note: z.union([ z.undefined(), z.string()]),
        relic: z.union([ z.undefined(), z.string() ]),
        weapon: z.union([ z.undefined(), z.string()]),
      })
    ),
  }),
});

const relics = defineCollection({
  loader: file("src/content/relics.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

const weapons = defineCollection({
  loader: file("src/content/weapons.json"),
  schema: z.object({
    description: z.string(),
    id: z.string(),
    name: z.string(),
    starting_weapon_for: z.union([ z.undefined(), z.string() ]),
    type: z.enum(["weapon", "passive"]),
    unlock_via: z.string(),
  }),
});

export const collections = { characters, evolutions, relics, weapons };
