import { render, screen } from '@testing-library/react'
import Home from '../pages'

describe('Home component', () => {

  test('renders Avaliable Cars text', () => {
    render(<Home />)
    const avaliableCarsText = screen.getByText(/Avaliable Cars/i)
    expect(avaliableCarsText).toBeInTheDocument()
  })

  test('renders cards components if the request succeeds', async () => {
    render(<Home />)
    const cardElements = await screen.findAllByTestId('card-container')
    expect(cardElements).not.toHaveLength(0)
  })


})