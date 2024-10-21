import ListingCard from "../components/ListingCard"

const Lisitng = () => {
  return (
    <main className='grid grid-cols-12  gap-2 w-full p-[30px]'>
      <div className="h-[110px] col-span-12 w-full bg-gradient-to-r from-lime-50 to-indigo-50 rounded-lg p-[20px]">
        <div className="flex justify-center">
          <h1 className="text-slate-800 font-extrabold text-3xl">Search your dreams</h1>
        </div>
        <div className="flex justify-center m-1">
          <h1 className="text-slate-700 font-medium text-md">Choose from the most advanteogous offers</h1>
        </div>
      </div>
      <div className="col-span-12 w-full  h-[130px] ">
        <div className="p-2  flex justify-center">
          <input
            className='p-2 w-[400px] rounded-full outline outline-black '
            type='text'
            placeholder='Search '
          />
        </div>
      </div>
      {[...Array(10)].map((_, index) => (
      <div key={index} className="col-span-3 md:col-span-3 lg:col-span-3 sm:col-span-4 m-2 shadow-md hover:shadow-2xl">
        <ListingCard />
      </div>
    ))}
    </main>
  )
}

export default Lisitng
