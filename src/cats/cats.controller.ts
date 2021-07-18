import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateCatDto } from './dto/create-cat.dto'

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    createCatDto.age
    return 'This action adds a new car'
  }

  @Get()
  findAll(): 'string' {
    return 'Strings'
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a ${id} cat`
  }
}
