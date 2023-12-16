import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingGlobalInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('Before Global.....')

        const now = Date.now()
        return next
        .handle()
        .pipe(
            tap(() => {
                console.log(`After Global.... ${Date.now() - now}ms`)
            })
        )
    }
}