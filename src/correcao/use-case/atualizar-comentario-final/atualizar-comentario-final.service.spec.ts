import { Test, TestingModule } from '@nestjs/testing';
import { AtualizarComentarioFinalService } from './atualizar-comentario-final.service';

describe('AtualizarComentarioFinalService', () => {
  let service: AtualizarComentarioFinalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtualizarComentarioFinalService],
    }).compile();

    service = module.get<AtualizarComentarioFinalService>(AtualizarComentarioFinalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
