import { IPartnerSchema, PartnerRepository } from "../../infra/repositories";

export class PartnerService {
  constructor(private readonly partnerRepository: PartnerRepository) {}

  public async create(data: IPartnerSchema) {
    console.log(2)
    const partner = await this.partnerRepository.create(data);
    return partner;
  }

  public async loadById(id: string) {
    const partner = await this.partnerRepository.loadById(id);
    return partner;
  }
}
