import { Test, TestingModule } from '@nestjs/testing';
import { AdicionarMarcacaoService } from './adicionar-marcacao.service';

describe('AdicionarMarcacaoService', () => {
  let service: AdicionarMarcacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdicionarMarcacaoService],
    }).compile();

    service = module.get<AdicionarMarcacaoService>(AdicionarMarcacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
