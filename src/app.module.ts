import { Module } from '@nestjs/common';
import { CorrecaoModule } from './correcao/correcao.module';

@Module({
  imports: [CorrecaoModule],
})
export class AppModule {}
