import * as z from "zod";

export const partnerSchema = z.object({
  tradingName: z.string({ required_error: "tradingName is required" }),
  ownerName: z.string({ required_error: "ownerName is required" }),
  document: z.string({
    required_error: "document is required and expected be unique",
  }),
  coverageArea: z.object({
    type: z.string({ required_error: "type is required" }),
    coordinates: z.array(z.array(z.array(z.array(z.number())))),
  }),
  address: z.object({
    type: z.string({ required_error: "type is required" }),
    coordinates: z.array(z.number()),
  }),
});


export type IPartnerSchema = z.infer<typeof partnerSchema>;
