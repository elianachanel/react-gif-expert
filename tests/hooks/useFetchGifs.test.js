import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifts } from "../../src/hooks/useFetchGifts"

describe(' pruebas de hooke useFetchGifs', () => {
    test('debe de regresar el estado incial', () => {

       const { result } = renderHook( () =>  useFetchGifts('Game of throne') );
       const { images, isLoading } = result.current;

       expect( images.length).toBe(0);
       expect( isLoading).toBeTruthy();
        console.log(result)
    });

    test('debe de retornar un arreglo de imagenes y isloading en false', async() => {

        const { result } = renderHook( () =>  useFetchGifts('Game of throne') );

        await waitFor(

            () => expect(result.current.images.leght).toBeGreaterThan(0)

        );
        const { images, isLoading } = result.current;

        expect( images.length).toBeGreaterThan(0);
        expect( isLoading).toBeFalsy();

     })
})