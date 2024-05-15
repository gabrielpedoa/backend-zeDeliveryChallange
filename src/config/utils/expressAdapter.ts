import { Request, Response } from "express";
import errorHandler from "./errorHandler";

type httpResponse<T> = {
  statusCode: number;
  data: T;
};

export interface IController<In, Out> {
  handle: (data: In) => Promise<httpResponse<Out>>;
}

type IError = {
  error_type: string;
  error_code: string;
  error_message: string;
  error_details: {};
  status_code: number;
};

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
      const formatedError = errorHandler(error);
      return res.status(error.statusCode).send(formatedError);
    }/*  */
  };
};
