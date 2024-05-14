import { Request, Response } from "express";
import errorHandler from "./errorHandler";

type httpResponse<T> = {
  statusCode: number;
  data: T;
};

export interface IController<In, Out> {
  handle: (data: In) => Promise<httpResponse<Out>>;
}

export default <In>(controller: IController<In, unknown>) => {
  return async (req: Request, res: Response) => {
    try {
      const { data, statusCode } = await controller.handle({
        ...req.body,
        ...req.params,
        ...req.query,
      });
      return res.status(statusCode).json(data);
    } catch (error) {
      console.log(error);
      return errorHandler(error as Error)
    }
  };
};