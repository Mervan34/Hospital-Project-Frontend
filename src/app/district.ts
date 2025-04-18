export interface District {
  mervandistrictid: number;
  name: string;
  cityId: number;
}

export function newInstanceDistrict(): District {
  const data: District = {
    mervandistrictid: 0,
    name: '',
    cityId: 0,
  };
  return data;
}