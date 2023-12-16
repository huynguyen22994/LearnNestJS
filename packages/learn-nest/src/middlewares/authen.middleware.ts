import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthenMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('in authen')
        next();
    }
}