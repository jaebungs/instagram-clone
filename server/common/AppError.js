export default class AppError extends Error {
    constructor (msg, status = 404) {
        super(msg);
        this.status = status;
    }
}