import { Injectable } from '@nestjs/common';
import {
  CorrecaoRepository,
  Marcacao,
} from 'src/correcao/repository/correcao.repository';

@Injectable()
export class AtualizarMarcacaoService {
  constructor(private readonly correcaoRepository: CorrecaoRepository) {}

  execute(idCorrecao: string, idMarker: string, marcacao: Partial<Marcacao>) {
    const correcao = this.correcaoRepository.get(idCorrecao);
    if (!correcao) return;

    correcao.correcao.marcacoes = correcao.correcao.marcacoes.map((item) => {
      if (item.id === idMarker) {
        return { ...item, ...marcacao };
      }

      return item;
    });

    this.correcaoRepository.update(idCorrecao, correcao);
  }
}
