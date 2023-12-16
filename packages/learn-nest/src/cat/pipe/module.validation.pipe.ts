import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common'

@Injectable()
export class ModuleValidation implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata) {
        console.log('Module Pipe validation - Can parse param here')

        return value
    }
}