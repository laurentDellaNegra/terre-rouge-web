import { ReactNode } from 'react'

export default function CouponBanner({ children }: { children: ReactNode }) {
  return <div className="bg-red-600 text-white text-center">{children}</div>
}
