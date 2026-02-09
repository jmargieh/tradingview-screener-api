/**
 * Exception thrown when TradingView API returns an error
 */
export class MalformedRequestException extends Error {
  public readonly code: number;
  public readonly responseMsg: string;
  public readonly url: string;
  public readonly payload: string;

  constructor(code: number, responseMsg: string, url: string, payload: string) {
    const message = `Error ${code}: ${responseMsg}\nRequest: ${url}\nPayload:\n${payload}`;
    super(message);

    this.name = 'MalformedRequestException';
    this.code = code;
    this.responseMsg = responseMsg;
    this.url = url;
    this.payload = payload;

    // Maintains proper stack trace for where error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MalformedRequestException);
    }
  }
}
