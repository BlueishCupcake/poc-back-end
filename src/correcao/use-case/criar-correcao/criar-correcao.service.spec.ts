import { Test, TestingModule } from '@nestjs/testing';
import { CriarCorrecaoService } from './criar-correcao.service';

describe('CriarCorrecaoService', () => {
  let service: CriarCorrecaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CriarCorrecaoService],
    }).compile();

    service = module.get<CriarCorrecaoService>(CriarCorrecaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
