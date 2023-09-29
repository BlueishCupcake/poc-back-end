import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {
  CorrecaoRepository,
  Marcacao,
} from 'src/correcao/repository/correcao.repository';

@Injectable()
export class AdicionarMarcacaoService {
  constructor(private readonly correcaoRepository: CorrecaoRepository) {}

  execute(idCorrecao: string, marcacao: Omit<Marcacao, 'id'>) {
    const state = this.correcaoRepository.get(idCorrecao);
    if (!state) return;

    const novaMarcacao = {
      id: randomUUID(),
      ...marcacao,
    };

    state.correcao.marcacoes = [...state.correcao.marcacoes, novaMarcacao];

    this.correcaoRepository.update(idCorrecao, state);

    return novaMarcacao;
  }
}
