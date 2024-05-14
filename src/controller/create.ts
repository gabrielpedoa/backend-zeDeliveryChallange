import { PartnerService } from "../domain/service/partner.service";
import { PartnerRepository } from "../infra/repositories";
import { CreateController } from "../presentational/controller/create";
import { partnerSchema } from "../presentational/dtos/partnerDto";
import { SchemaValidator } from "../presentational/helpers/schemaValidator";

export function createPartnerController() {
  const partner = new PartnerService(new PartnerRepository());
  return new CreateController(partner, new SchemaValidator(partnerSchema));
}
