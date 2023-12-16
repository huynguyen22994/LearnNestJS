import { Module, Global, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { APP_FILTER, APP_PIPE, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.services'
import { LoggerMiddleware } from '../middlewares'
import { HttpExceptionFilter } from '../exceptions'
import { ModuleValidation } from './pipe/module.validation.pipe'
import { AuthGuardModule } from '../auth/module-auth.guard'
import { LoggingModuleInterceptor } from '../interceptor/logger-module.interceptor'

@Global() // use Global to make this module can using everywhre in Global. should register once => CatsService can be use every where
@Module({
    controllers: [CatsController],
    providers: [CatsService, 
        { 
            provide: APP_FILTER, // use this way for each module
            useClass: HttpExceptionFilter
        },
        {
            provide: APP_PIPE,
            useClass: ModuleValidation
        },
        {
            provide: APP_GUARD,
            useClass: AuthGuardModule
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingModuleInterceptor
        }
    ],
    exports: [CatsService]
})
export class CatsModule implements NestModule {
    constructor(private catsService: CatsService) {}
    // do somthing before trigger module

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware)
        .exclude( // Loại trừ các route này
            { path: 'cats', method: RequestMethod.POST },
            'cats/(.*)'
        ).forRoutes(CatsController)
    }
}