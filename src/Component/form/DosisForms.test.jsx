
import React from 'react';
import DosisForms from './DosisForms';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

it("Should display a form", () => {
    const { queryByPlaceholderText } = render(<DosisForms/>);

    expect(queryByPlaceholderText('Ingrese su peso')).toBeTruthy();
    expect(queryByPlaceholderText('Ingrese la dosis')).toBeTruthy();
    expect(queryByPlaceholderText('Ingrese la presentación')).toBeTruthy();

    expect(screen.getByRole("button", { name: /Calcular/i })).toBeTruthy();
})

it("should validate mandatory input when press submit", async () => {

    const { getByText } = render(<DosisForms/>);

    fireEvent.click(getByText("Calcular"));
    await waitFor(() => {
      //console.log(getByText("Debe ingresar peso en Kg"))
      expect(getByText("Debe ingresar peso en Kg")).toBeTruthy();
    });
});
