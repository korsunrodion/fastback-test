import { Body, Controller, Post } from '@nestjs/common';
import { ProcessInProgressDto, ProcessReadyDto } from './process.dto';
import { ProcessService } from './process.service';
import {
  ProcessEntryStatus,
  mapEntryProductToResponse,
} from './process.helper';

@Controller('process')
export class ProcessController {
  constructor(private processService: ProcessService) {}

  @Post('/')
  async processUrl(
    @Body() url: string,
  ): Promise<ProcessReadyDto | ProcessInProgressDto> {
    const entry = await this.processService.getEntry(url);

    if (!entry) {
      const entry = await this.processService.createProcessEntry(url);
      this.processService.processEntry(entry);
      return {
        id: entry.public_id,
        status: entry.status,
      };
    } else if (entry.status === ProcessEntryStatus.IN_PROGRESS) {
      return {
        id: entry.public_id,
        status: entry.status,
      };
    } else {
      return {
        id: entry.public_id,
        status: entry.status,
        product: mapEntryProductToResponse(entry.data),
      };
    }
  }
}
