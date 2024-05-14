import { IController } from "../../config/utils/expressAdapter";
import { BadRequest, Created } from "../helpers/httpResponse";
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
    if (validation) return BadRequest(validation);
    const response = await this.createUseCase.create(data);
    return Created(response);
  }
}
