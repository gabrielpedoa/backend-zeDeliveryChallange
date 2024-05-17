import { Request, Response } from "express";

export interface IController<In, Out> {
  handle: (data: In) => Promise<Out>;
}

export default <In>(controller: IController<any, any>) => {
  return async (req: Request, res: Response) => {
    try {
      const { status_code, ...data } = await controller.handle({
        ...req.body,
        ...req.params,
        ...req.query,
      });
      return res.status(status_code).json(data.response);
    } catch (error) {
      const err = error as { status_code: number; message: string };
      return res.status(err.status_code).send(err);
    }
  };
};
