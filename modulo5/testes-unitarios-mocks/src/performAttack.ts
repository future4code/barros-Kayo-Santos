import { Character} from "./validateCharacter";

export const performAttack = (attacker:Character,defender:Character, validator: (input:Character) => boolean) => {
    if(!validator(attacker)||!validator(defender)){
        throw new Error("Invalid character");        
    }
    if(defender.defense < attacker.strength){
        return defender.life -= attacker.strength - defender.defense           
        
    }
}