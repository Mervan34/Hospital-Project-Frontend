export interface City {
    mervancityid: number;
    name: string;
  }

  export function newInstanceCity(): City{
    const data: City = {
      mervancityid: 0,
      name: '',
    };
    return data;
  }