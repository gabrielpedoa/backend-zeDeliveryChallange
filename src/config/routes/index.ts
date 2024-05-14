import { Router } from "express";
import partner from "./partner";

const router = Router();

export default () => {
  partner(router);
  return router;
};
