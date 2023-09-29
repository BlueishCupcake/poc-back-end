import { Test, TestingModule } from '@nestjs/testing';
import { BuscarEstadoService } from './buscar-estado.service';

describe('BuscarEstadoService', () => {
  let service: BuscarEstadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuscarEstadoService],
    }).compile();

    service = module.get<BuscarEstadoService>(BuscarEstadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
