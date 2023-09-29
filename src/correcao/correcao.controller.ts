import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CriarCorrecaoService } from './use-case/criar-correcao/criar-correcao.service';
import { BuscarEstadoService } from './use-case/buscar-estado/buscar-estado.service';
import { AdicionarMarcacaoService } from './use-case/adicionar-marcacao/adicionar-marcacao.service';
import { AtualizarMarcacaoService } from './use-case/atualizar-marcacao/atualizar-marcacao.service';
import { RemoverMarcacaoService } from './use-case/remover-marcacao/remover-marcacao.service';
import { AtualizarCriterioService } from './use-case/atualizar-criterio/atualizar-criterio.service';
import { AtualizarComentarioFinalService } from './use-case/atualizar-comentario-final/atualizar-comentario-final.service';
import {
  CriterioUpdatedDto,
  MarcacaoCreateDto,
  MarcacaoUpdateDto,
  ComentarioFinalDto,
} from './dto/index.dto';

@Controller('correcao')
export class CorrecaoController {
  private state = 1;

  constructor(
    private readonly criarCorrecaoService: CriarCorrecaoService,
    private readonly buscarEstadoService: BuscarEstadoService,
    private readonly adicionarMarcacaoService: AdicionarMarcacaoService,
    private readonly atualizarMarcacaoService: AtualizarMarcacaoService,
    private readonly removerMarcacaoService: RemoverMarcacaoService,
    private readonly atualizarCriterioService: AtualizarCriterioService,
    private readonly atualizarComentarioFinalService: AtualizarComentarioFinalService,
  ) {}

  @Post('init')
  initCorrecao() {
    if (this.state === 1) {
      this.state = 2;
      throw new InternalServerErrorException('Fudeu goaias');
    }

    return this.criarCorrecaoService.execute();
  }

  @Get('/:id_correcao')
  getState(@Param('id_correcao') idCorrecao: string) {
    const state = this.buscarEstadoService.execute(idCorrecao);

    if (!state) throw new NotFoundException('Correcao não encontrada');

    return state;
  }

  @Post('/:id_correcao/marker')
  addMarker(
    @Param('id_correcao') idCorrecao: string,
    @Body() marcacao: MarcacaoCreateDto,
  ) {
    return this.adicionarMarcacaoService.execute(idCorrecao, marcacao);
  }

  @Patch('/:id_correcao/marker/:id_marker')
  updateMarker(
    @Param('id_correcao') idCorrecao: string,
    @Param('id_marker') idMarker: string,
    @Body() marcacao: MarcacaoUpdateDto,
  ) {
    this.atualizarMarcacaoService.execute(idCorrecao, idMarker, marcacao);
  }

  @Delete('/:id_correcao/marker/:id_marker')
  deleteMarker(
    @Param('id_correcao') idCorrecao: string,
    @Param('id_marker') idMarker: string,
  ) {
    this.removerMarcacaoService.execute(idCorrecao, idMarker);
  }

  @Put('/:id_correcao/criterios/:id_criterio')
  atualizarCriterio(
    @Param('id_correcao') idCorrecao: string,
    @Param('id_criterio') idCriterio: string,
    @Body() criterio: CriterioUpdatedDto,
  ) {
    this.atualizarCriterioService.execute(idCorrecao, idCriterio, criterio);
  }

  @Put('/:id_correcao/final_comment')
  updateFinalComment(
    @Param('id_correcao') idCorrecao: string,
    @Body() finalComment: ComentarioFinalDto,
  ) {
    this.atualizarComentarioFinalService.execute(idCorrecao, finalComment);
  }
}
