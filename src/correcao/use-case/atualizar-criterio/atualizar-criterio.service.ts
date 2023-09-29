import { Injectable } from '@nestjs/common';
import {
  CorrecaoRepository,
  Criterio,
} from 'src/correcao/repository/correcao.repository';

@Injectable()
export class AtualizarCriterioService {
  constructor(private readonly correcaoRepository: CorrecaoRepository) {}

  execute(idCorrecao: string, idCriterio: string, criterio: Partial<Criterio>) {
    const correcao = this.correcaoRepository.get(idCorrecao);
    if (!correcao) return;

    correcao.correcao.criterios = correcao.correcao.criterios.map((item) => {
      if (item.id === idCriterio) {
        return { ...item, ...criterio };
      }

      return item;
    });

    this.correcaoRepository.update(idCorrecao, correcao);
  }
}
