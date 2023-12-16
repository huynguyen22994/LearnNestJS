import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Roles } from './roles.decorator'
import { Observable } from 'rxjs'

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get(Roles, context.getHandler());
        console.log(roles)
        if(!roles) {
            return true
        }
        // Thường trước khi đến check author sẽ đi qua authen và có filed user trong request
        // const request = context.switchToHttp().getRequest()
        // const user = request.user;
        // return this.matchRoles(roles, user.roles)

        // throw new UnauthorizedException(); // tùy chỉnh nén lỗi, nhưng mặc định false là Forbiden

        return false
    }

    matchRoles(roles, useRoles) {
        return true
    }
}