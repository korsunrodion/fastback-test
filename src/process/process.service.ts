import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { ProcessEntry } from 'src/entities/process-entry.entity';
import { Repository } from 'typeorm';
import { ProcessEntryStatus, mockData } from './process.helper';

@Injectable()
export class ProcessService {
  constructor(
    @InjectRepository(ProcessEntry)
    private entryRepository: Repository<ProcessEntry>,
  ) {}

  async getEntry(url: string) {
    const entry = await this.entryRepository.findOne({
      where: {
        url,
      },
      order: {
        created_at: -1,
      },
    });

    return entry;
  }

  async createProcessEntry(url: string) {
    const entry = this.entryRepository.create({
      public_id: randomUUID(),
      status: ProcessEntryStatus.IN_PROGRESS,
      url,
    });

    await this.entryRepository.save(entry);
    return entry;
  }

  async processEntry(entry: ProcessEntry) {
    if (!entry) {
      throw `Entry not found for url ${entry.url}`;
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 10000);
    });

    entry.data = mockData;
    entry.status = ProcessEntryStatus.READY;
    await this.entryRepository.save(entry);
  }
}
