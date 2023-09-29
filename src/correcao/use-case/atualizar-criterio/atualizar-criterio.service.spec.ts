import { Test, TestingModule } from '@nestjs/testing';
import { AtualizarCriterioService } from './atualizar-criterio.service';

describe('AtualizarCriterioService', () => {
  let service: AtualizarCriterioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtualizarCriterioService],
    }).compile();

    service = module.get<AtualizarCriterioService>(AtualizarCriterioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
