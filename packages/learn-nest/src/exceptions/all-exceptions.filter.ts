import { Catch, ArgumentsHost } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void {
        console.log('Exception allll:::::::: all exception pass here')
        // console.log('Exception::', exception)
        // console.log('Host:::', host)
        super.catch(exception, host)
    }
}
