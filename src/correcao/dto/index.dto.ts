export class MarcacaoCreateDto {
  mode: string;
}

export class MarcacaoUpdateDto {
  mode?: string;
}

export class CriterioUpdatedDto {
  nota?: number;
  comentario?: string;
}

export class ComentarioFinalDto {
  tipo?: string;
  content?: string;
}
