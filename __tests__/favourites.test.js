import { render, screen } from '@testing-library/react'
import Favourites from '../pages/favourites'

describe('Favourites component', () => {
  test('renders "No products found" if no product exists', () => {
    render(<Favourites />)
    const noProductFoundText = screen.getByText(/No products found/i, { exact: false })
    expect(noProductFoundText).toBeInTheDocument()
  })

})