import CategoryList from './CategoryList'
import PriceAccordion from './PriceAccordion'
import { TagsAccordion } from './TagsAccordion'

export default function FilterAside() {
  return (
    <aside>
      {/* <form className="hidden lg:block sticky top-32"> */}
      <form className="hidden lg:block">
        <h3 className="sr-only">Categories</h3>

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
