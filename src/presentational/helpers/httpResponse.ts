function HttpResponse<T>(statusCode: number, data: T) {
  return {
    statusCode,
    data: data,
  };
}

function ExceptionError(error: unknown) {
  const { message } = error as Error;
  return HttpResponse(400, message);
}

const Ok = <T>(data: T) => HttpResponse(200, data);
const BadRequest = <T>(data: T) => HttpResponse(400, data);
const Created = <T>(data: T) => HttpResponse(201, data);
const NotFound = () => HttpResponse(404, null);

export { Ok, BadRequest, Created, NotFound, ExceptionError };
