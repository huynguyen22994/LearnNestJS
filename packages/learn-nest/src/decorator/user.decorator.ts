import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const User = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        console.log('decorator of User... could get User from request:: use in controller')
        const request = ctx.switchToHttp().getRequest();
        const user = request.user

        return data ? user?.[data] : user
    }
)