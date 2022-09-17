import React, { useState, FC } from 'react'
import Router from 'next/router'
import Select from 'react-select'
import { IFilters, IReactSelect } from '../../../interfaces'
import Button from '../../../common/button'

const Filters: FC<IFilters> = ({ manufacturers, colors = [] }) => {
  const [colorValue, setColorValue] = useState('')
  const [manufacturersValue, setManufacturersValue] = useState('')
  const [sortbyValue, setSortbyValue] = useState('')

  const handleChange = (event: IReactSelect, setState: (value: string) => void) => {
    setState(event?.value)
  }
  
  const handleParseFilters = () => {
    Router.push({ query: { color: colorValue, manufacturer: manufacturersValue, sort: sortbyValue, page: 1 } })
  }
  
  const colorsOptions = [ { label: 'none', value: '' }, ...colors.map((color) => ({ value: color, label: color }))]
  const manufacturersOptions = [{ label: 'none', value: '' }, ...manufacturers.map(({ name }) => ({ value: name, label: name }))]
  const sortbyOptions = [{ label: 'none', value: '' }, { value: 'asc', label: 'Mileage - Ascending' }, { value: 'des', label: 'Mileage - Descending' }]
  
  const selectStyle = {
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused ? '#EA7F28' : 'inherit',
      color: isFocused ? 'white' : 'black',
  })
}

  return (
    <aside id={'aside'}>

      <div className='my-3'>
        <label className='my-1'>Color</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isSearchable
          styles={selectStyle}
          onChange={(e: IReactSelect) => handleChange(e, setColorValue)}
          name="color"
          options={colorsOptions}
        />
      </div>

      <div className='my-3'>
        <label className='my-1'> Manufacturer</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isSearchable
          styles={selectStyle}
          name="manufacturer"
          onChange={(e: IReactSelect) => handleChange(e, setManufacturersValue)}
          options={manufacturersOptions}
        />
      </div>

      <div className='my-3'>
        <label className='my-1'> Sort by</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isSearchable
          styles={selectStyle}
          onChange={(e: IReactSelect) => handleChange(e, setSortbyValue)}
          name="sortby"
          options={sortbyOptions}
        />
      </div>

      <div id='filter-btn-container'>
        <Button onClick={handleParseFilters}>Filter</Button>
      </div>
    </aside>
  )
}

export default Filters