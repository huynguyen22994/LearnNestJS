import { Controller, Get, Post, Req, Res, Next, HttpCode, 
    Header, Redirect, Query, Param, HostParam, Body, HttpException, 
    HttpStatus, BadGatewayException, UseFilters, ParseIntPipe, ParseBoolPipe, UseGuards, UseInterceptors,
    UsePipes } from '@nestjs/common'
import { NextFunction } from 'express';
import { CreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.services'
import { CatInterFace } from './interfaces/cats.interfaces'
import { ForbiddenException, AppException, HttpExceptionFilter } from '../exceptions'
import { ValidationPipe } from './pipe/validation.pipe'
import { ZodValidationPipi, createCatSchema, CreateCatDtoValid } from './pipe/zod.validation.pipi'
import { ValidationPipeV2 } from './pipe/class-validation.validation.pipe'
import { ParseIntPipeV2 } from './pipe/parse-int.pipe'
import { AuthGuard } from '../auth/auth.guard'
import { AuthGuardController } from '../auth/controller-auth.guard'
import { Roles } from '../auth/roles/roles.decorator'
import { RoleGuard } from '../auth/roles/roles.guard'
import { LoggingInterceptor } from '../interceptor/logger.interceptor'
import { CacheInterceptor } from '../interceptor/cache.interceptor'
import { TimeoutInterceptor } from '../interceptor/timeout.interceptor'
import { User } from '../decorator/user.decorator'

@Controller('cats')
@UseGuards(new AuthGuardController()) // Use for controller
// @UseFilters(HttpExceptionFilter) // Dùng cho tất cả path đi vào cats
@UseInterceptors(LoggingInterceptor) // Use interceptor in controller
export class CatsController {
    constructor(private catService: CatsService) {}

    @Get()
    async findAll(@Req() request: Request, @Res() res: Response, @Next() next: NextFunction): Promise<CatInterFace[]> {
        // return this.catService.findAll()
        try {
            return await this.catService.findAll()
        } catch(error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This is a customer message'
            }, HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }

    @Get('dog')
    findAllDog(@Req() request: Request, @Res() res: Response, @Next() next: NextFunction): string {
        // console.log(request)
        console.log(next)
        return 'test'
    }

    @Post()
    // @HttpCode(204) // No Content
    @Header('Cache-Control', 'none')
    // @UseFilters(HttpExceptionFilter) // Filer Exception tại đây chỉ dùng cho duy nhất path này
    createCat(@Body() createCatBody: CatInterFace): void {
        this.catService.create(createCatBody)
        console.log('into Post')
        throw new ForbiddenException()
        //throw new BadGatewayException('Somthing bad', { cause: new Error(), description:'Some error' })
        // throw new AppException()
    }

    @Post('create')
    async createCate(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto)
        return 'This is action create cat'
    }

    // Route wildcards - Using * between route so that it will catch all charracters: Ex: /cats/hisdf_sfslo
    @Get('hi*lo')
    findHello(): string {
        return 'Find hilloooo'
    }

    @Get('redirect')
    @Redirect('/cats', 302)
    redirectAction(): string {
        console.log('do somthing before re')
        return 'test'
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version: string | number) {
        if(version && version == '5') {
            return {
                url: 'https://docs.nestjs.com/v5/'
            }
        }
    }

    @Get('test/:id')
    findOne(@Param('id', ParseIntPipe) id: number): string {
        // using pipe to convert params data to expect type before pass to controller handler
        console.log(id)

        return 'a cat!!!'
    }

    @Get('validation/:id')
    findValidation(@Param('id', ValidationPipe) id: unknown): string {

        console.log('Params controler:::', id)
        return 'this is test!!!'
    }

    // Zod validation
    @Post('validation')
    @UsePipes(new ZodValidationPipi(createCatSchema))
    postValidation(@Body() createCatDto: CreateCatDtoValid) {
        this.catService.create(createCatDto as CatInterFace)
    }

    // Class validation
    @Post('class-validation')
    postClassValidation(@Body(new ValidationPipeV2()) createCatDto: CatInterFace) {
        console.log('in valid class path:::', createCatDto)
        this.catService.create(createCatDto)
    }
    
    @Get('pareseint/:id')
    @Roles(['admin'])
    @UseGuards(RoleGuard)
    parseInt(@Param('id', new ParseIntPipeV2()) id: number): string {
        console.log(id)

        return 'this is test parse int'
    }

    @Get('query')
    @UseGuards(AuthGuard) // use for each path 
    @UseInterceptors(CacheInterceptor)
    getQuery(
        @Query('id', new ParseIntPipeV2()) id: number,
        @Query('flag', ParseBoolPipe) flag: boolean
    ): string {
        console.log(id);
        console.log(flag);

        return 'this is test'
    }

    @Get('timeout')
    @UseGuards(AuthGuard) // use for each path 
    @UseInterceptors(TimeoutInterceptor)
    async getQueryTimeOut(
        @Query('id', new ParseIntPipeV2()) id: number,
        @Query('flag', ParseBoolPipe) flag: boolean,
        @User() user: unknown
    ): Promise<string> {
        console.log(id);
        console.log(flag);

        console.log('Get user in controller:::', user)

        const testPromise: Promise<string> = new Promise((resovle, reject) => {
            setTimeout(() => {
                console.log('in promise')
                resovle('test')
            }, 4000)
        })

        const a = await Promise.all([testPromise]) 

        return 'this is test'
    }

    @Get('decorator')
    @UseGuards(AuthGuard) // use for each path 
    // @UseInterceptors(CacheInterceptor)
    getQueryDecorator(
        @Query('id', new ParseIntPipeV2()) id: number,
        @Query('flag', ParseBoolPipe) flag: boolean,
        @User('name') user: unknown // We can use Pipe for the decorator
    ): string {
        console.log(id);
        console.log(flag);
        console.log('USER:::::', user)

        return 'this is test'
    }

    // Sub-Domain Routing
    // @Get()
    // getInfo(@HostParam('account') account: string) {
    //     return account;
    // }

}