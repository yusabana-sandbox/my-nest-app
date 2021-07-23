import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // グローバルミドルウェアがあればここでuseする
  // https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-middleware#%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AB%E3%83%9F%E3%83%89%E3%83%AB%E3%82%A6%E3%82%A7%E3%82%A2
  await app.listen(3000)
}
bootstrap()
