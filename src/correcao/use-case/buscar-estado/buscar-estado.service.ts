import { Injectable } from '@nestjs/common';
import { CorrecaoRepository } from 'src/correcao/repository/correcao.repository';

@Injectable()
export class BuscarEstadoService {
  constructor(private readonly correcaoRepository: CorrecaoRepository) {}

  execute(idCorrecao: string) {
    return this.correcaoRepository.get(idCorrecao);
  }
}
