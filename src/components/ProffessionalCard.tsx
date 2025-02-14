const ProfessionalCard = () => {

  return (
    <div className="col-span-12 bg-white p-16 m-[30px] rounded-xl shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 drop-shadow-md mb-4">
          Trust the Professionals
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We are a global, boutique real estate brokerage committed to delivering exceptional results
        </p>
      </div>

      {/* Stats Section with Diamond Shape */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { value: "10+", label: "Years of Experience" },
          { value: "200+", label: "Properties Sold" },
          { value: "95%", label: "Happy Customers" }
        ].map((item, index) => (
          <div key={index} className="flex justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center transform rotate-45  shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-slate-700 hover:bg-violet-500 ">
              <div className="absolute transform -rotate-45 text-center">
                <div className="text-3xl font-bold text-slate-800 hover:text-white">{item.value}</div>
                <p className="text-sm text-slate-600 hover:text-white mt-1">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalCard;
