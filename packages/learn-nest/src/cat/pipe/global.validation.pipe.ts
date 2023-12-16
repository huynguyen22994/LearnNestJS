import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common'

@Injectable()
export class GlobalValidation implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata) {
        console.log('Global Pipe validation - Can parse param here')

        return value
    }
}