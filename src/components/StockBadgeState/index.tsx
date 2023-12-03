export default function StockBadgeState({ availableForSale }: { availableForSale: boolean }) {
  return availableForSale ? (
    <span className="bg-primary-extra-light text-primary py-1 px-3 rounded-full">En stock</span>
  ) : (
    <span className="bg-red-100 text-red-500 py-1 px-3 rounded-full">Rupture de stock</span>
  )
}
