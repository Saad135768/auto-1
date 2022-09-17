import { render, screen } from '@testing-library/react'
import Favourites from '../pages/favourites'

describe('Favourites component', () => {
  test('renders "No products found" if no product exists', () => {
    render(<Favourites />)

    const cardElements = screen.getAllByTestId('card-container')
    const x = expect(cardElements).not.toHaveLength(0)
    console.log(cardElements, x)
    const noProductFoundText = screen.getByText(/No products found/i, { exact: false })
    expect(noProductFoundText).toBeInTheDocument()
  })


  // test('Does not render "No products found" if a product exists', () => {
  //   render(<Favourites />)
  //   const noProductFoundText = screen.queryByText(/No products found/i, { exact: false })
  //   expect(noProductFoundText).toBeNull()
  // })
})