import React, { useState } from 'react'
import Router from 'next/router'
import { Form } from 'react-bootstrap'
import Button from '../../../common/button'

const Filters = ({ manufacturers, colors }) => {
  const [colorValue, setColorValue] = useState('')
  const [manufacturersValue, setManufacturersValue] = useState('')
  const [sortbyValue, setSortbyValue] = useState('')

  const handleChange = (event, setState) => {
    setState(event.target.value)
  }
  
  const handleParseFilters = () => {
    Router.push({ query: { color: colorValue, manufacturer: manufacturersValue, sort: sortbyValue, page: 1 } })
  }
  

  return (
    <aside id={'aside'}>
      <Form.Group>
        <Form.Label>Color</Form.Label>
        <Form.Select onChange={(e) => handleChange(e, setColorValue)}>
          <option value={''}>None</option>
          {colors?.map((color) => <option value={color} key={color}>{color}</option>)}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label> Manufacturer</Form.Label>
        <Form.Select onChange={(e) => handleChange(e, setManufacturersValue)}>
          <option value={''}>None</option>
        {manufacturers?.map(({ name: manufacturer }) => <option value={manufacturer} key={manufacturer}>{manufacturer}</option>)}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label> Sort by</Form.Label>
        <Form.Select onChange={(e) => handleChange(e, setSortbyValue)}>
          <option value={''}>None</option>
          <option value={'asc'}>Mileage - Ascending</option>
          <option value={'des'}>Mileage - Descending</option>
        </Form.Select>
      </Form.Group>

      <div id='filter-btn-container'>
        <Button onClick={handleParseFilters}>Filter</Button>
      </div>
    </aside>
  )
}

export default Filters