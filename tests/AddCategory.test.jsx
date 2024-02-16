import { AddCategory } from "../src/components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Pruebas en addCatgeory', () => {
    
    test('debe de cambioar el valor de la caja de texto', () => {

        render (<AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value: 'Game of throne'}} )
        expect(input.value).toBe('Game of throne')

        screen.debug();

    }); 

    test('debe de llamar a newcategory si el input tiene valor', () => {

        const inputValue = 'Game of throne';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory = { onNewCategory }/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );


    });


    test(' no debe de llamar el nnewcategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory}/>)
        const form = screen.getByRole('form'); 

        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();

    })
})