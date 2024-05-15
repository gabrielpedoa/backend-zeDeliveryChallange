import { BadRequest, NotFound } from "../../presentational/helpers/httpResponse";
import { NotFoundException } from "../exceptions/errors/notFound";
import { PayloadException } from "../exceptions/errors/payload";
export default (error: Error) => {
  const nf = new NotFoundException(error.message)
  if (error instanceof NotFoundException) return {nf}
  if (error instanceof PayloadException) return BadRequest(error.message);
  return {
    status: 500,
    message: error.message,
  };
};