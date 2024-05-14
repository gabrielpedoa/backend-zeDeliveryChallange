import { IController } from "../../config/utils/expressAdapter";
import { Ok } from "../helpers/httpResponse";

export interface ILoadByIdUseCase<In, Out> {
  loadById: (data: In) => Promise<Out>;
}

export class LoadByIdController<In, Out> implements IController<In, unknown> {
  constructor(private readonly loadByIdUseCase: ILoadByIdUseCase<In, Out>) {}

  public async handle(data: In) {
    const response = await this.loadByIdUseCase.loadById(data);
    return Ok(response);
  }
}
