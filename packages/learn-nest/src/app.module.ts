import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule } from './cat/cats.module'
import { DogModule } from './dog/dog.module'
import { DatabaseModule } from './database/database.module'
import { AppService } from './app.service';
import { LoggerMiddleware, AuthenMiddleware } from './middlewares'
import { NextFunction } from 'express';
import helmet from 'helmet'
import morgan from 'morgan'

@Module({
  imports: [CatsModule, DogModule],
  controllers: [AppController],
  providers: [AppService, DatabaseModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      // consumer.apply(LoggerMiddleware)
      // .forRoutes('/')

      // consumer.apply(AuthenMiddleware)
      // .forRoutes({ path: 'cats', method: RequestMethod.GET })

      // consumer.apply(LoggerMiddleware)
      // .forRoutes({ path: 'hi*lo', method: RequestMethod.ALL })

      // use middlw ware with controller

      consumer.apply(helmet(), (req: Request, res: Response, next: NextFunction) => {
        console.log('Middleware function...')
        next()
      }).forRoutes('/')
  }
}
