import { IController } from "../../config/utils/expressAdapter";
import { ISchemaValidator } from "../helpers/schemaValidator";

export interface ICreateUseCase<In, Out> {
  create: (data: In) => Promise<Out>;
}

export class CreateController<In, Out> implements IController<In, Out> {
  constructor(
    private readonly createUseCase: ICreateUseCase<In, Out>,
    private readonly schemaValidator: ISchemaValidator<In>
  ) {}

  public async handle(data: In): Promise<Out> {
    const validation = this.schemaValidator.isValid(data);
    if (validation) return validation as unknown as Out;
    const response = await this.createUseCase.create(data);
    return { status_code: 201, response } as unknown as Out;
  }
}
