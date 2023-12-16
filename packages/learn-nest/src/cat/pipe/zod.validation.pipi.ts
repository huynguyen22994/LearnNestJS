import { PipeTransform, ArgumentMetadata, BadGatewayException } from '@nestjs/common'
import { ZodObject, z } from 'zod'

export class ZodValidationPipi implements PipeTransform {
    constructor(private schema: ZodObject<any> ){}

    transform(value: any, metadata: ArgumentMetadata) {
        try {
            console.log(value)
            this.schema.parse(value)
        } catch(error) {
            throw new BadGatewayException('Validation failed:::')
        }
        return value
    }
}

export const createCatSchema = z.object({
    name: z.string(),
    age: z.number(),
    breed: z.string()
}).required();
export type CreateCatDtoValid = z.infer<typeof createCatSchema>