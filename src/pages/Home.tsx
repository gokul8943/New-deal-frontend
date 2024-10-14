import ListingCard from "../components/ListingCard"

const Home = () => {
  return (
    <main className='grid grid-cols-12 w-full'>
      <div className="col-span-12 h-[400px] bg-gradient-to-r from-indigo-300 to-lime-300 rounded m-[30px]">
        <div className="w-1/2">
          <div className="flex justify-center mt-[60px]">
            {/* <p className="text-cneter font-bold text-slate-800">Welcome to Realestate</p> */}
            <h1 className="text-center font-extrabold text-[40px] text-slate-900">Manage Your Property</h1>
          </div>
          <div className="m-2">
            <p className="text-center font-bold text-slate-700 m-2">Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</p>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className="col-span-12 h-[220px] m-[10px]">
        <div className="flex justify-center">
          <h1 className="text-ceter font-extrabold text-[27px] text-slate-800 p-4">Everything should be this easy</h1>
        </div>
        <div className="flex justify-between m-[10px] gap-3">
          <div className="item-cneter p-3 border shadow-lg hover:shadow-2xl rounded-md ">
            <h1 className="text-center font-bold text-yellow-700 ">Buy</h1>
            <p className="text-slate-600 font-semibold">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
          </div>
          <div className="item-center p-3 border shadow-lg hover:shadow-2xl rounded-md ">
            <h1 className="text-center font-bold text-blue-700 ">Sell</h1>
            <p className="text-slate-600 font-semibold">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
          </div>
          <div className="item-center p-3 border shadow-lg hover:shadow-2xl rounded-md">
            <h1 className="text-center font-bold text-green-700">Rent</h1>
            <p className="text-slate-600 font-semibold">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
          </div>
        </div>
      </div>

      <div className="col-span-12">
        <div className="">
          <h1 className="font-bold text-[20px] text-slate-700 p-[20px]">Recently Added</h1>
        </div>
      </div>

    </main>
  )
}

export default Home
