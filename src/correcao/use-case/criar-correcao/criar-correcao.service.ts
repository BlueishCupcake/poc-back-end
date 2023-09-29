import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CorrecaoRepository } from 'src/correcao/repository/correcao.repository';

@Injectable()
export class CriarCorrecaoService {
  constructor(private readonly correcaoRepository: CorrecaoRepository) {}

  execute() {
    const initState = {
      id: randomUUID(),
      usuario: 'Pedrin',
      correcao: {
        inicio: new Date(),
        marcacoes: [],
        criterios: [
          {
            id: randomUUID(),
            titulo: 'criterio 1',
            nota: 0,
            comentario: '',
          },
          {
            id: randomUUID(),
            titulo: 'criterio 2',
            nota: 0,
            comentario: '',
          },
          {
            id: randomUUID(),
            titulo: 'criterio 3',
            nota: 0,
            comentario: '',
          },
        ],
        comentario_final: {
          tipo: null,
          content: null,
        },
      },
    };

    this.correcaoRepository.create(initState);

    return initState;
  }
}
