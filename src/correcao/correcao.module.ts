import { Module } from '@nestjs/common';
import { CorrecaoController } from './correcao.controller';
import { CriarCorrecaoService } from './use-case/criar-correcao/criar-correcao.service';
import { BuscarEstadoService } from './use-case/buscar-estado/buscar-estado.service';
import { AdicionarMarcacaoService } from './use-case/adicionar-marcacao/adicionar-marcacao.service';
import { AtualizarMarcacaoService } from './use-case/atualizar-marcacao/atualizar-marcacao.service';
import { RemoverMarcacaoService } from './use-case/remover-marcacao/remover-marcacao.service';
import { AtualizarCriterioService } from './use-case/atualizar-criterio/atualizar-criterio.service';
import { AtualizarComentarioFinalService } from './use-case/atualizar-comentario-final/atualizar-comentario-final.service';
import { CorrecaoRepository } from './repository/correcao.repository';

@Module({
  controllers: [CorrecaoController],
  providers: [
    CriarCorrecaoService,
    BuscarEstadoService,
    AdicionarMarcacaoService,
    AtualizarMarcacaoService,
    RemoverMarcacaoService,
    AtualizarCriterioService,
    AtualizarComentarioFinalService,
    CorrecaoRepository,
  ],
})
export class CorrecaoModule {}
