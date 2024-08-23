export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability2[];
  forms: Ability[];
  game_indices: Gameindex[];
  held_items: Helditem[];
  location_area_encounters: string;
  moves: Move[];
  species: Ability;
  sprites: Sprites;
  cries: Cries;
  stats: Stat[];
  types: Type[];
  past_types: Pasttype[];
}

export interface Pasttype {
  generation: Ability;
  types: Type[];
}

export interface Type {
  slot: number;
  type: Ability;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: Other;
  versions: Versions;
}

export interface Versions {
  'generation-i': Generationi;
  'generation-ii': Generationii;
  'generation-iii': Generationiii;
  'generation-iv': Generationiv;
  'generation-v': Generationv;
  'generation-vi': Generationvi;
  'generation-vii': Generationvii;
  'generation-viii': Generationviii;
}

export interface Generationviii {
  icons: Dreamworld;
}

export interface Generationvii {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Home;
}

export interface Generationvi {
  'omegaruby-alphasapphire': Home;
  'x-y': Home;
}

export interface Generationv {
  'black-white': Blackwhite;
}

export interface Blackwhite {
  animated: Showdown;
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface Generationiv {
  'diamond-pearl': Showdown;
  'heartgold-soulsilver': Showdown;
  platinum: Showdown;
}

export interface Generationiii {
  emerald: Officialartwork;
  'firered-leafgreen': Crystal;
  'ruby-sapphire': Crystal;
}

export interface Generationii {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Generationi {
  'red-blue': Redblue;
  yellow: Redblue;
}

export interface Redblue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface Other {
  dream_world: Dreamworld;
  home: Home;
  'official-artwork': Officialartwork;
  showdown: Showdown;
}

export interface Showdown {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface Dreamworld {
  front_default: string;
  front_female: null;
}

export interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

export interface Versiongroupdetail {
  level_learned_at: number;
  version_group: Ability;
  move_learn_method: Ability;
}

export interface Helditem {
  item: Ability;
  version_details: Versiondetail[];
}

export interface Versiondetail {
  rarity: number;
  version: Ability;
}

export interface Gameindex {
  game_index: number;
  version: Ability;
}

export interface Ability2 {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
}

export interface Ability {
  name: string;
  url: string;
}
