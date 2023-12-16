import { HttpException, HttpStatus } from '@nestjs/common'

export class ForbiddenException extends HttpException {
    constructor() {
        console.log('Exception forbiden:::::')
        super('Forbidden', HttpStatus.FORBIDDEN)
    }
}