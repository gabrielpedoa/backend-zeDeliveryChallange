import { PartnerService } from "../domain/service/partner.service";
import { PartnerRepository } from "../infra/repositories";
import { LoadByIdController } from "../presentational/controller/loadById";

export function loadPartnerByIdController() {
  const service = new PartnerService(new PartnerRepository());
  return new LoadByIdController(service);
}