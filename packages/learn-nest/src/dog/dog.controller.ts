import { Controller, Get } from '@nestjs/common'

@Controller('dog')
export class DogController {
    
    @Get()
    async getDog() {
        return 'this is a dog!!'
    }
}