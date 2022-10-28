
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


it("should show error if peso lower than 0.1", async () => {

    const { queryByPlaceholderText, getByText } = render(<DosisForms />);

    const pesoInput = queryByPlaceholderText("Ingrese su peso");
    fireEvent.change( pesoInput , { target: { value: "0.01" } }  );

    await waitFor(() => {
        expect( pesoInput.value).toBe('0.01')
    });


    fireEvent.click(getByText("Calcular"));
    await waitFor(() => {
      expect(getByText("Peso debe ser mayor a 0.1 kg")).toBeTruthy();
    });
});

it("should show success message if peso grather or equal than 0.1", async () => {

    const { queryByPlaceholderText, getByText } = render(<DosisForms />);

    const pesoInput = queryByPlaceholderText("Ingrese su peso");
    fireEvent.change( pesoInput , { target: { value: "0.1" } }  );

    await waitFor(() => {
        expect( pesoInput.value).toBe('0.1')
    });

    fireEvent.click(getByText("Calcular"));
    await waitFor(() => {
      expect(getByText("peso 0.1 kg")).toBeTruthy();
    });
});

it("should show error if DOSIS lower than 0.1", async () => {

    const { queryByPlaceholderText, getByText } = render(<DosisForms />);

    const dosisInput = queryByPlaceholderText("Ingrese la dosis");
    fireEvent.change( dosisInput , { target: { value: "0.01" } }  );

    await waitFor(() => {
        expect( dosisInput.value).toBe('0.01')
    });


    fireEvent.click(getByText("Calcular"));
    await waitFor(() => {
      expect(getByText("Dosis debe ser mayor a 0.1")).toBeTruthy();
    });
});

it("should show success message if DOSIS grather or equal than 0.1", async () => {

    const { queryByPlaceholderText, getByText } = render(<DosisForms />);

    const dosisInput = queryByPlaceholderText("Ingrese la dosis");
    fireEvent.change( dosisInput , { target: { value: "0.1" } }  );

    await waitFor(() => {
        expect( dosisInput.value).toBe('0.1')
    });

    fireEvent.click(getByText("Calcular"));
    await waitFor(() => {
      expect(getByText("Dosis 0.1")).toBeTruthy();
    });
});