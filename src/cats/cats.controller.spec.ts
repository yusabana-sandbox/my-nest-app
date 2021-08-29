import { Test, TestingModule } from '@nestjs/testing'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'

describe('CatsController', () => {
  let catsController: CatsController
  let catsService: CatsService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile()

    // getは静的インスタンスのみ、resolveは動的にプロバイダを解決する
    // catsController = moduleRef.get<CatsController>(CatsController)
    // catsService = moduleRef.get<CatsService>(CatsService)
    catsController = await moduleRef.resolve(CatsController)
    catsService = await moduleRef.resolve(CatsService)
  })

  it('should be defined', () => {
    expect(catsController).toBeDefined()
  })

  describe('fiindAll', () => {
    it('hoge', async () => {
      const result = ['test'] as any
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result)

      expect(await catsController.findAll()).toBe(result)
    })
  })
})
