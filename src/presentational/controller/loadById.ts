import { IController } from "../../config/utils/expressAdapter";

export interface ILoadByIdUseCase<In, Out> {
  loadById: (data: In) => Promise<Out>;
}

export class LoadByIdController<In, Out> implements IController<In, unknown> {
  constructor(private readonly loadByIdUseCase: ILoadByIdUseCase<In, Out>) {}

  public async handle(data: In) {
    const response = await this.loadByIdUseCase.loadById(data);
    console.log(response)
    return {
      status_code: 200,
      response,
    };
  }
}
