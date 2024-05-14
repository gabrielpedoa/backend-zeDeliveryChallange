import prisma from "../prisma";

export type IPartnerSchema = {
  tradingName: string;
  ownerName: string;
  document: string;
  coverageArea: {
    type: string;
    coordinates: [[[number]]];
  };
  address: {
    type: string;
    coordinates: [number];
  };
};

export class PartnerRepository {
  public async create(data: IPartnerSchema) {
    const partner = await prisma.partner.create({ data });
    return partner;
  }

  public async loadById(id: string) {
    const partner = await prisma.partner.findFirst({
      where: {
        id: Number(id),
      },
    });
    return partner;
  }
}
