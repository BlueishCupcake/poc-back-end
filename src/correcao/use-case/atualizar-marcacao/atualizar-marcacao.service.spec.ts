import { Test, TestingModule } from '@nestjs/testing';
import { AtualizarMarcacaoService } from './atualizar-marcacao.service';

describe('AtualizarMarcacaoService', () => {
  let service: AtualizarMarcacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtualizarMarcacaoService],
    }).compile();

    service = module.get<AtualizarMarcacaoService>(AtualizarMarcacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
