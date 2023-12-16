import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        // add user to request
        const request = context.switchToHttp().getRequest()
        request.user = {
            name: 'Huy'
        }

        console.log(':::: authentication guard :::::::')

        return true;
    }
}