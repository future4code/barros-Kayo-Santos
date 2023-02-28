import { performPurchase } from "../src/funcs/funcUser"

describe("Teste de compra do usuário",() => {
    const user = {
        name: "kayo",
        balance: 100
    }

    test("usuário com o saldo maior do que o valor de compra",() => {
        expect(performPurchase(user,20)).toEqual(
            {
                name: "kayo",
                balance: 80
            }  
        )
    })

    test("usuário com o saldo igual ao valor de compra",() => {
        expect(performPurchase(user,100)).toEqual(
            {
                name: "kayo",
                balance: 0
            }  
        )
    })

    test("usuário com o saldo menor do que o valor de compra",() => {
        expect(performPurchase(user,120)).toBeUndefined()
    })
})