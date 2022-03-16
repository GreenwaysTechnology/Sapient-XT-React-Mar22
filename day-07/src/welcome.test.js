import { render, screen } from '@testing-library/react';
import { Welcome } from './welcome';


test('has correct welcome text', () => {
    render(<Welcome firstName="John" lastName="Doe" />)
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John Doe')
});
test('has correct input value', () => {
    render(<Welcome firstName="John" lastName="Doe" />)
    expect(screen.getByRole('form')).toHaveFormValues({
        firstName: 'John',
        lastName: 'Doe',
    })
})