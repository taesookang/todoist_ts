import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from '../App'

beforeEach(cleanup);


describe('<App />', () => {

    it('renders the application', () => {
        const { queryByTestId } = render(<App darkModeDefault={false} />)
        expect(queryByTestId('application')).toBeTruthy();
    })

    it('renders the application using dark mode', () => {
        const { queryByTestId } = render(<App darkModeDefault={true} />);
        
        const app = queryByTestId('application') as HTMLElement
        expect(app).toBeTruthy();
        expect(
          app.classList.contains('darkmode')
        ).toBeTruthy();
      });
})