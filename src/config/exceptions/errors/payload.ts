import { DefaultHttpException } from "./default";

export class PayloadException extends DefaultHttpException {
  constructor(message: string) {
    super(message, 400, "VALIDATION_ERROR");
    this.name = "ValidatorException";
  }
}
