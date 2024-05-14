import { DefaultHttpException } from "./default";

export class NotFoundException extends DefaultHttpException {
  constructor(message: string) {
    super(message, 404, "NOT_FOUND");
    this.name = "NotFoundException";
  }
}
