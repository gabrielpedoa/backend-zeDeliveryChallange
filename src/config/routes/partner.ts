import { Router } from "express";
import expressAdapter from "../utils/expressAdapter";
import { createPartnerController } from "../../controller/create";
import { loadPartnerByIdController } from "../../controller/loadById";

export default (router: Router) => {
  router.post("/partner/create", expressAdapter(createPartnerController()));
  router.get("/partner/get/:id", expressAdapter(loadPartnerByIdController()));
};
