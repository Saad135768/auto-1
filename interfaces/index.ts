export interface ICarsData {
  cars: ICar[]
  totalPageCount: number,
  totalCarsCount: number
}

export interface ICar {
  stockNumber: number,
  manufacturerName: string,
  modelName: string,
  color: string,
  mileage: {
    number: number,
    unit: string
  },
  fuelType: string,
  pictureUrl: string
}

export interface IColor {
  colors: string
}

export interface IManufacturer {
  name: string
  models: {
    name: string
  }[]
}

export interface IHome {
  cars: ICar[]
  colors: IColor[]
  manufacturers: IManufacturer[]
}

export interface ICard extends ICar{
  loading?: boolean
}

export interface IFilters {
  manufacturers: IManufacturer[]
  colors: IColor[]
}

export interface IReactSelect {
  value: string
  label: string
}