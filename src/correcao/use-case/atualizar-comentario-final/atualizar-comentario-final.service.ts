import { Injectable } from '@nestjs/common';
import {
  ComentarioFinal,
  CorrecaoRepository,
} from 'src/correcao/repository/correcao.repository';

@Injectable()
export class AtualizarComentarioFinalService {
  constructor(private readonly correcaoRepository: CorrecaoRepository) {}

  execute(idCorrecao: string, finalComment: ComentarioFinal) {
    const correcao = this.correcaoRepository.get(idCorrecao);
    if (!correcao) return;

    correcao.correcao.comentario_final = {
      ...correcao.correcao.comentario_final,
      ...finalComment,
    };

    this.correcaoRepository.update(idCorrecao, correcao);
  }
}
