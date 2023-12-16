import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToInstance } from 'class-transformer'

@Injectable()
export class ValidationPipeV2 implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        console.log('in Pipe Class validation V2:::::', value, metatype)
        if(!metatype || !this.toValidate(metatype)){
            return value
        }
        const object = plainToInstance(metatype, value)
        console.log('plain object::::', object)
        const errors = await validate(object)
        if(errors.length > 0) {
            throw new BadRequestException('Validation faile:::::')
        }

        return value
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object]
        return !types.includes(metatype)
    }
}
