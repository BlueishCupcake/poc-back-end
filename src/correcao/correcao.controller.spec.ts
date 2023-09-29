import { Test, TestingModule } from '@nestjs/testing';
import { CorrecaoController } from './correcao.controller';

describe('CorrecaoController', () => {
  let controller: CorrecaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorrecaoController],
    }).compile();

    controller = module.get<CorrecaoController>(CorrecaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
