import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common'
// full-pathでアクセスできるようにしたい testとかで動かない webpackの設定が必要
// import { LoggingInterceptor } from 'src/interceptors/loggiing.interceptor'
// import { ValidationPipe } from 'src/validations/validation.pipe'
import { LoggingInterceptor } from '../interceptors/loggiing.interceptor'
import { ValidationPipe } from '../validations/validation.pipe'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './interfaces/cat.interface'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Get()
  @UseInterceptors(LoggingInterceptor)
  findAll(): Cat[] {
    // return 'Strings22'
    return this.catsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a ${id} cat`
  }
}
