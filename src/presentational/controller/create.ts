import { PayloadException } from "../../config/exceptions/errors/payload";
import { IController } from "../../config/utils/expressAdapter";
import { ISchemaValidator } from "../helpers/schemaValidator";

export interface ICreateUseCase<In, Out> {
  create: (data: In) => Promise<Out>;
}

export class CreateController<In, Out> implements IController<In, unknown> {
  constructor(
    private readonly createUseCase: ICreateUseCase<In, Out>,
    private readonly schemaValidator: ISchemaValidator<In>
  ) {}

  public async handle(data: In) {
    const validation = this.schemaValidator.isValid(data);
    if (validation) return validation
    const response = await this.createUseCase.create(data);
    return response;
  }
}
