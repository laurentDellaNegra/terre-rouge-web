import { MouseEventHandler, ReactNode } from 'react'

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

export default function IconButton(props: Props) {
  const { onClick, children } = props
  return (
    <button
      type="button"
      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
