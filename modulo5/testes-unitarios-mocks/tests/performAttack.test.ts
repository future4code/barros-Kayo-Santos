import { performAttack } from "../src/performAttack";

describe("Teste ValidadeEmptyProperties", () => {
    test("Teste 1:  dois personagens com valores válidos, em que o defensor perca 200 pontos de vida.", () => {
        
        const ataccker = {
            name: "kayo",
            life: 2000,
            strength: 700,
            defense: 500
        }
        const defender = {
            name: "Felipe",
            life: 2000,
            strength: 500,
            defense: 500
        }

        const validatorMock = jest.fn(() => {
			return true
		});

        
           const output = performAttack(ataccker,defender,validatorMock)
           expect(output).toBe(1800)
           expect(validatorMock).toBeCalled()
           expect(validatorMock).toHaveBeenCalledTimes(2);
           expect(validatorMock).toHaveReturnedTimes(2);     
        

    });

    test("Teste 2:  um dos personagens com alguma informação inválida. ", () => {
        expect.assertions(4)
        const ataccker = {
            name: "kayo",
            life: 2000,
            strength: 700,
            defense: 500
        }
        const defender = {
            name: "felipe",
            life: -2000,
            strength: 500,
            defense: 500
        }

        const validatorMock = jest.fn(() => {
			return false
		});

        
           try {
            performAttack(ataccker,defender,validatorMock)             
           } catch (error:any) {
            expect(error.message).toBe("Invalid character")
           expect(validatorMock).toBeCalled()
           expect(validatorMock).toHaveBeenCalledTimes(1);
           expect(validatorMock).toHaveReturnedTimes(1);
           }   
        

    });
});