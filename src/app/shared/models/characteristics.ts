
export interface IHighestStat {
  name: string;
  url: string;
}

export interface ILanguage {
  name: string;
  url: string;
}

export interface IDescription {
  description: string;
  language: ILanguage;
}

export interface ICharacteristic {
  id: number;
  gene_modulo: number;
  possible_values: number[];
  highest_stat: IHighestStat;
  descriptions: IDescription[];
}
