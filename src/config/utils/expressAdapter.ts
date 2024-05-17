import { Request, Response } from "express";

export interface IController<In, Out> {
  handle: (data: In) => Promise<Out>;
}

export default <In>(controller: IController<In, { status_code: number }>) => {
  return async (req: Request, res: Response) => {
    try {
      const data = await controller.handle({
        ...req.body,
        ...req.params,
        ...req.query,
      });
      return res.status(data.status_code).json(data);
    } catch (error) {
      const err = error as { status_code: number; message: string };
      return res.status(err.status_code).send(err);
    }
  };
};
