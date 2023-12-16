import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingModuleInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('Before Module.....')

        const now = Date.now()
        return next.handle()
        .pipe(
            tap(() => {
                console.log(`After Module.... ${Date.now() - now}ms`)
            })
        )
    }
}