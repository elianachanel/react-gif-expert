import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifts } from "../../src/hooks/useFetchGifts";

jest.mock('../../src/hooks/useFetchGifts');

describe('pruebas en el componente', () => {

    const category = 'game of throne'

    test('debe mostrar el loading ', () => {


        useFetchGifts.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={category}/> );
        expect( screen.getByText('Cargando..'));
        expect( screen.getByText(category))
    });

    test('debe de mostrar items cuando se cargan las imagenes de useFetch', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Game of throne',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '1253',
                title: 'House of dragons',
                url: 'https://localhost/house.jpg'
            }
    ]

        useFetchGifts.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={category}/> );
        expect(screen.getAllByRole('img').length).toBe(2)


    })

})