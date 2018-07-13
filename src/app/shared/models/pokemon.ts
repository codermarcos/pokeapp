export interface IResponsePokemon {
  count: number;
  next: string;
  previous: string;
  results: Array<IPokemonCard>;
}

export interface IPokemonCard {
  name: string;
  url: string;
}

export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IAbility[];
  forms: IAbility[];
  game_indices: IGameIndex[];
  held_items: IHeldItem[];
  location_area_encounters: ILocationAreaEncounter[];
  IMoves: IMove[];
  species: IAbility;
  ISprites: ISprites;
  IStats: IStat[];
  ITypes: IType[];
}

interface IType {
  slot: number;
  IType: IAbility;
}

interface IStat {
  base_IStat: number;
  effort: number;
  IStat: IAbility;
}

interface ISprites {
  back_female: string;
  back_shiny_female: string;
  back_default: string;
  front_female: string;
  front_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface IMove {
  IMove: IAbility;
  version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
  level_learned_at: number;
  version_group: IAbility;
  IMove_learn_method: IAbility;
}

interface ILocationAreaEncounter {
  location_area: IAbility;
  version_details: Versiondetail2[];
}

interface Versiondetail2 {
  max_chance: number;
  encounter_details: Encounterdetail[];
  version: IAbility;
}

interface Encounterdetail {
  min_level: number;
  max_level: number;
  condition_values: IAbility[];
  chance: number;
  method: IAbility;
}

interface IHeldItem {
  item: IAbility;
  version_details: Versiondetail[];
}

interface Versiondetail {
  rarity: number;
  version: IAbility;
}

interface IGameIndex {
  game_index: number;
  version: IAbility;
}

interface IAbility {
  is_hidden?: boolean;
  name: string;
  url: string;
}
