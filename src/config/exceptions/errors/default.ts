export class DefaultHttpException extends Error {
  error_type: string;
  error_code: string;
  error_message: string;
  status_code: number;
  error_details = {};

  constructor(
    message: string,
    status_code: number,
    error_code = "NOT_IMPLEMENTED"
  ) {
    super(message);
    this.error_type = this.constructor.name;
    this.error_code = error_code;
    this.error_message = message;
    this.status_code = status_code;
  }
}
