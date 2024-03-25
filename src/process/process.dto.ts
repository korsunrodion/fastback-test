import { ProcessEntryStatus } from './process.helper';

export class ProcessReadyDto {
  id: string;
  status: ProcessEntryStatus;
  product: {
    name: string;
    brand: string;
    price: number;
    isAvailable: boolean;
    isInSale: boolean;
    saleDescription: string;
    description: string;
  };
}

export class ProcessInProgressDto {
  id: string;
  status: ProcessEntryStatus;
}
