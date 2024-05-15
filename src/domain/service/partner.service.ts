import { NotFoundException } from "../../config/exceptions/errors/notFound";
import { PayloadException } from "../../config/exceptions/errors/payload";
import { IPartnerSchema, PartnerRepository } from "../../infra/repositories";

export type ILoadById = {
  id: number;
};

export class PartnerService {
  constructor(private readonly partnerRepository: PartnerRepository) {}

  public async create(data: IPartnerSchema) {
    const documentAlreadExists = await this.partnerRepository.loadByDocument(
      data.document
    );
    if (documentAlreadExists)
      throw new PayloadException("This Partner Already Exists!");
    const partner = await this.partnerRepository.create(data);
    return partner;
  }

  public async loadById(data: { id: number }) {
    const partner = await this.partnerRepository.loadById(data.id);
    if (!partner) throw new NotFoundException("Partner not exists!");
    return partner;
  }
}
