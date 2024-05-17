import { ZodObject } from "zod";
import { PayloadException } from "../../config/exceptions/errors/payload";

export interface ISchemaValidator<T> {
  isValid: (data: T) => {} | null;
}

export class SchemaValidator<T> implements ISchemaValidator<T> {
  private schema: ZodObject<any>;
  constructor(schema: ZodObject<any>) {
    this.schema = schema;
  }

  public isValid(data: T) {
    const isSchemaValid = this.schema.safeParse(data);
    if (isSchemaValid.success) {
      return null;
    }

    const errorMessage =
      isSchemaValid.error.errors.length === 1
        ? isSchemaValid.error.errors[0].message
        : isSchemaValid.error.errors.map((e) => e.message);
    const path = isSchemaValid.error.errors.map((e) => e.path);

    const payload = new PayloadException("Validation Error");
    payload.error_details = { path, errorMessage };
    return payload;
  }
}
