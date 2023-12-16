import { Injectable } from '@nestjs/common'
import { CatInterFace } from './interfaces/cats.interfaces'

@Injectable()
export class CatsService {
    private readonly cats: CatInterFace[] = [];

    create(cat: CatInterFace) {
      this.cats.push(cat);
    }
  
    findAll(): CatInterFace[] {
      return this.cats;
    }
}