import { ReactNode } from 'react'

export default function CouponBanner({ children }: { children: ReactNode }) {
  return <div className="bg-primary text-white text-center">{children}</div>
}
