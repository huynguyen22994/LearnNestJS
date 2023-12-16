import { HttpException, HttpStatus } from '@nestjs/common'

export class AppException extends HttpException {
    constructor() {
        console.log('do somthing')
        super('Error', HttpStatus.FORBIDDEN)
    }
}