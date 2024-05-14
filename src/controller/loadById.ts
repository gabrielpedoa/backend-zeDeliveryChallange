import { PartnerService } from "../domain/service/partner.service";
import { PartnerRepository } from "../infra/repositories";
import { LoadByIdController } from "../presentational/controller/loadById";

const partnerRepository = new PartnerRepository();
const partnerService = new PartnerService(partnerRepository);

export function loadPartnerByIdController() {
  return new LoadByIdController(partnerService);
}
