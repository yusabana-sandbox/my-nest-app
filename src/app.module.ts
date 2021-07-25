import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
// import { CatsController } from './cats/cats.controller'
import { CatsModule } from './cats/cats.module'
import { LoggerMiddleware } from './middlewares/logger.middleware'

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(CatsController)
    consumer.apply(LoggerMiddleware).forRoutes({ path: 'cats', method: RequestMethod.ALL })
    // throw new Error('Method not implemented.')
  }
}
