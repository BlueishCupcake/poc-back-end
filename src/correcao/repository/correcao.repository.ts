import { Injectable } from '@nestjs/common';

export type Criterio = {
  id: string;
  titulo: string;
  nota: number;
  comentario?: string;
};

export type Marcacao = {
  id: string;
  mode: string;
};

export type ComentarioFinal = {
  tipo?: string;
  content?: string;
};

export type Correcao = {
  inicio: Date;
  marcacoes: Marcacao[];
  criterios: Criterio[];
  comentario_final: ComentarioFinal;
};

export type CorrecaoInput = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  usuario: string;
  correcao: Correcao;
};

@Injectable()
export class CorrecaoRepository {
  private readonly state: Map<string, CorrecaoInput>;

  constructor() {
    this.state = new Map();
  }

  create(payload: { id: string } & any) {
    this.state.set(payload.id, payload);
  }

  update(id: string, payload: any) {
    this.state.set(id, payload);
  }

  get(id: string) {
    return { ...this.state.get(id) };
  }
}
