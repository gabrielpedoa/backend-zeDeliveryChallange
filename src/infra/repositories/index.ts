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

  public async loadById(id: number) {
    const partner = await prisma.partner.findFirst({
      where: {
        id: Number(id),
      },
    });
    console.log(partner);
    return partner;
  }

  public async loadByDocument(document: string) {
    const partner = await prisma.partner.findFirst({
      where: {
        document: document,
      },
    });
    return partner;
  }
}
