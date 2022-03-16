import { render, screen } from '@testing-library/react';
import Checkbox from './checkbox'
import userEvent from '@testing-library/user-event';

test('handles click correctly', () => {
    render(<Checkbox />)
    userEvent.click(screen.getByText('Check'))
    expect(screen.getByLabelText('Check')).toBeChecked()
})