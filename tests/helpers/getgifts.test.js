import { number } from "prop-types"
import { getGifts } from "../../src/helpers/getGifs"

describe('Pruebas de gifts ', () => {

    test('debe de retornar un arreglo de gifts', async () => {

        const gifts = await getGifts('game of throne')
        console.log(gifts)
        expect(gifts.lenght).toBeGreaterThan(0);
        expect(gifts[0].toEqual({

            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),

        }))

    })
})