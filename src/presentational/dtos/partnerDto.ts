import * as z from "zod";

export const partnerSchema = z.object({
  tradingName: z.string(),
  ownerName: z.string(),
  document: z.string(),
  coverageArea: z.object({
    type: z.string(),
    coordinates: z.array(z.array(z.array(z.number()))),
  }),
  address: z.object({
    type: z.string(),
    coordinates: z.array(z.number()),
  }),
});
