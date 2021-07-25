import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common'
import { LoggingInterceptor } from 'src/interceptors/loggiing.interceptor'
import { ValidationPipe } from 'src/validations/validation.pipe'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Get()
  @UseInterceptors(LoggingInterceptor)
  findAll(): string {
    return 'Strings22'
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a ${id} cat`
  }
}
