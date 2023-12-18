import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter, AllExceptionsFilter } from './exceptions';
import { GlobalValidation } from './cat/pipe/global.validation.pipe';
import { AuthGuardGlobal } from './auth/global-auth.guard';
import { LoggingGlobalInterceptor } from './interceptor/logger-global.interceptor';

async function bootstrap() {
  const bug = '22224'
  const abc = '2222'
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter()); // use exception for global app

  // use all exception pass here
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  // use global pipe
  app.useGlobalPipes(new GlobalValidation());

  // use Guard global
  app.useGlobalGuards(new AuthGuardGlobal());

  // use Interceptor global
  app.useGlobalInterceptors(new LoggingGlobalInterceptor());

  console.log('test husky');

  await app.listen(8000);
}
bootstrap();
