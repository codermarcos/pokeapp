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
  moves: IMove[];
  species: IAbility;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
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
  move: IAbility;
  version_group_details: IVersionGroupDetail[];
}

interface IVersionGroupDetail {
  level_learned_at: number;
  version_group: IAbility;
  IMove_learn_method: IAbility;
}

interface ILocationAreaEncounter {
  location_area: IAbility;
  version_details: ILocationAreaEncounterVersionDetail[];
}

interface ILocationAreaEncounterVersionDetail {
  max_chance: number;
  encounter_details: IEncounterDetail[];
  version: IAbility;
}

interface IEncounterDetail {
  min_level: number;
  max_level: number;
  condition_values: IAbility[];
  chance: number;
  method: IAbility;
}

interface IHeldItem {
  item: IAbility;
  version_details: IHeldItemVersionDetail[];
}

interface IHeldItemVersionDetail {
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
