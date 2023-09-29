import { Test, TestingModule } from '@nestjs/testing';
import { RemoverMarcacaoService } from './remover-marcacao.service';

describe('RemoverMarcacaoService', () => {
  let service: RemoverMarcacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoverMarcacaoService],
    }).compile();

    service = module.get<RemoverMarcacaoService>(RemoverMarcacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
