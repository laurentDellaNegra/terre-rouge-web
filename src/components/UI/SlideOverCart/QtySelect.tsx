import { ChangeEvent } from 'react'

interface Props {
  id: string | number
  name: string
  onChange: (value: number) => void
  value: number
  size: number
}

export default function QtySelect({ id, onChange, name, value, size }: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(e.target.value)
    onChange(newValue)
  }
  return (
    <div className="sm:mt-0 sm:pr-9">
      <label htmlFor={`quantity-${id}`} className="sr-only">
        Quantity, {name}
      </label>
      <select
        id={`quantity-${id}`}
        name={`quantity-${id}`}
        onChange={handleChange}
        value={value}
        className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
      >
        {[...Array(size)].map((_e, i) => {
          const optionQty = i + 1
          return (
            <option key={optionQty} value={optionQty}>
              {optionQty}
            </option>
          )
        })}
      </select>
    </div>
  )
}
