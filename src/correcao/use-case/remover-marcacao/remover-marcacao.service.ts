import { Injectable } from '@nestjs/common';
import { CorrecaoRepository } from 'src/correcao/repository/correcao.repository';

@Injectable()
export class RemoverMarcacaoService {
  constructor(private readonly correcaoRepository: CorrecaoRepository) {}

  execute(idCorrecao: string, idMarker: string) {
    const correcao = this.correcaoRepository.get(idCorrecao);
    if (!correcao) return;

    correcao.correcao.marcacoes = correcao.correcao.marcacoes.filter(
      (item) => item.id !== idMarker,
    );

    this.correcaoRepository.update(idCorrecao, correcao);
  }
}
