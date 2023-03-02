export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
  }


  export const validCharacter = (input: Character) => {
    if (
        !input.name ||
        input.life === undefined || 
        input.strength === undefined ||
        input.defense === undefined
      ) {
        return false;
      }
  }