import Navbar from "../components/Navbar"
import SiteFooter from "../components/SiteFooter"

function Pricing() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Pricing</h1>
        <p className="mt-4 text-lg text-gray-600">
          Transparent and competitive pricing for all our delivery services.
        </p>
      </div>
      <SiteFooter />
    </div>
  )
}

export default Pricing