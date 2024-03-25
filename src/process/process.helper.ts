export enum ProcessEntryStatus {
  IN_PROGRESS = 'in-progress',
  READY = 'ready',
}

export const mockData = {
  name: 'Air One',
  brand: 'Nike',
  price: 100,
  isAvailable: true,
  isInSale: false,
  saleDescription: '',
  description: 'Best shoes ever',
};

export const mapEntryProductToResponse = (data: any) => {
  return {
    name: data.name,
    brand: data.brand,
    price: data.price,
    isAvailable: data.isAvailable,
    isInSale: data.isInSale,
    saleDescription: data.saleDescription,
    description: data.description,
  };
};
