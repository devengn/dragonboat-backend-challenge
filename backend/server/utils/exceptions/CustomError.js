export default class CustomError extends Error {
  constructor(message, type) {
    super(message);
  }
}
