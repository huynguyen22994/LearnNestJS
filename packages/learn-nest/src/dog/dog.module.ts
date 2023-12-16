import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { DogController } from './dog.controller'
import { LoggerMiddleware } from '../middlewares'

@Module({
    controllers: [DogController]
})
export class DogModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware)
        .forRoutes(DogController)
    }
}