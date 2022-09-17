import { render, screen } from '@testing-library/react'
import Home from '../pages'

describe('Home component', () => {

  test('renders Avaliable Cars text', () => {
    render(<Home />)
    const avaliableCarsText = screen.getByText(/Avaliable Cars/i)
    expect(avaliableCarsText).toBeInTheDocument()
  })

})