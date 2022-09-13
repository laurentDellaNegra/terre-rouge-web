import CategoryList from './CategoryList'
import ClearFilterButton from './ClearFilterButton'
import PriceAccordion from './PriceAccordion'
import { TagsAccordion } from './TagsAccordion'

export default function FilterAside() {
  return (
    <aside>
      {/* <form className="hidden lg:block sticky top-32"> */}
      <form className="hidden lg:block" onSubmit={(e) => e.preventDefault()}>
        <h3 className="sr-only">Categories</h3>

        <div className="mb-5">
          <ClearFilterButton />
        </div>

        <div className="border-b border-gray-200">
          <CategoryList />
        </div>

        <div className="border-b border-gray-200">
          <PriceAccordion />
        </div>

        <div className="border-b border-gray-200">
          <TagsAccordion />
        </div>
      </form>
    </aside>
  )
}
