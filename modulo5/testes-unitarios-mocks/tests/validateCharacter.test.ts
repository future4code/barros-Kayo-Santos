import { validCharacter } from "../src/validateCharacter";

describe.skip("Teste ValidadeEmptyProperties", () => {
    test("Teste 1:  personagem com o nome vazio", () => {
        const input = {
            name: "",
            life: 2000,
            strength: 700,
            defense: 500
        }

        const output = validCharacter(input)
       
        
        expect(output).toBe(false)

    });
    test("Teste 2:  personagem com a vida igual a zero", () => {
        const input = {
            name: "kayo",
            life: 0,
            strength: 700,
            defense: 500
        }

        const output = validCharacter(input)        
        expect(output).toBe(false)

    });
    test("Teste 3:  personagem com a força igual a zero", () => {
        const input = {
            name: "kayo",
            life: 2000,
            strength: 0,
            defense: 500
        }

        const output = validCharacter(input)
        expect(output).toBe(false)

    });
    test("Teste 4:  personagem com a defesa igual a zero", () => {
        const input = {
            name: "kayo",
            life: 2000,
            strength: 700,
            defense: 0
        }

        const output = validCharacter(input)
        expect(output).toBe(false)

    });
    test("Teste 5:  personagem com a vida ou a força ou a defesa com um valor negativo", () => {
        const input = {
            name: "kayo",
            life: 2000,
            strength: -700,
            defense: 500
        }

        const output = validCharacter(input)
        console.log(output);
        
        expect(output).toBe(false)

    });
    test("Teste 6:  personagem com o nome vazio", () => {
        const input = {
            name: "kayo",
            life: 2000,
            strength: 700,
            defense: 500
        }

        const output = validCharacter(input)
        expect(output).toBe(true)

    });
})