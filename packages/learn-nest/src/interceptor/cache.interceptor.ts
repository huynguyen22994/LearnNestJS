import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('Cache .....')
        const isCached = true;
        if (isCached) {
          return of([]); // values get from Redis
        }

        return next.handle();
    }
}