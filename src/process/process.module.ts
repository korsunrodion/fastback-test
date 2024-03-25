import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessEntry } from 'src/entities/process-entry.entity';
import { ProcessController } from './process.controller';
import { ProcessService } from './process.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProcessEntry])],
  controllers: [ProcessController],
  providers: [ProcessService],
})
export class ProcessModule {}
