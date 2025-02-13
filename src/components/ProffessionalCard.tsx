
const ProffessionalCard = () => {
  return (
    <div className="col-span-12 bg-white p-16 m-[30px] rounded-xl shadow-lg">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        Trust the Professionals
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        We are a global, boutique real estate brokerage committed to delivering exceptional results
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="text-center p-6">
        <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
        <p className="text-gray-600">Years of Experience</p>
      </div>
      <div className="text-center p-6">
        <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
        <p className="text-gray-600">Properties Sold</p>
      </div>
      <div className="text-center p-6">
        <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
        <p className="text-gray-600">Happy Customers</p>
      </div>
    </div>
  </div>
  )
}

export default ProffessionalCard
