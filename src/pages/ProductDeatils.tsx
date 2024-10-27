import { useEffect, useState } from "react"
import { getListing } from "../service/api/user/lisiting.api"
import ListingCard from "../components/ListingCard"

const ProductDeatils = () => {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
      getListing()
        .then((res) => {
          setData(res.data.response)
        }).catch((error) => {
          console.log(error);
  
        })
    }, [])

    return (
        <main className='grid grid-cols-12 w-full p-[20px]'>
            <div className="col-span-12 flex justify-between gap-[6px]">
                <div className="w-2/3">
                    <div className="flex justify-start p-[20px]">
                        <h1 className="font-bold text-slate-600 text-2xl">Beautiful House</h1>
                    </div>
                    <div className="h-[350px] border">

                    </div>
                </div>
                <div className="w-1/3  h-[400px]">
                    <div className="flex justify-start pl-[10px] mt-2">
                        <h1 className="font-bold text-slate-600 text-xl">Brief characteristics</h1>
                    </div>
                    <div className="ml-[20px]">
                        <div className="flex gap-2 m-2">
                            <span className="text-base font-bold text-slate-700">City</span>:<span>Kannur</span>
                        </div>
                        <div className="flex gap-2 m-2">
                            <span className="text-base font-bold text-slate-700">Street</span>:<span>Kottiyoor</span>
                        </div>
                        <div className="flex gap-2 m-2">
                            <span className="text-base font-bold text-slate-700">Type</span>:<span>House</span>
                        </div>
                        <div className="flex gap-2 m-2">
                            <span className="text-base font-bold text-slate-700">Number of rooms</span>:<span>3 Rooms</span>
                        </div>
                        <div className="flex gap-2 m-2">
                            <span className="text-base font-bold text-slate-700">Total area</span>:<span>1500sqft</span>
                        </div>
                        <div className="flex gap-2 m-2">
                            <span className="text-base font-bold text-slate-700">No of bathrooms</span>:<span>3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-8 border shadow-md h-[300px] ">
                <div className="m-[10px]">
                    <div className="text-lg font-semibold text-slate-700">Description</div>
                    <p className="text-sm font-medium text-slate-500">FEDORS GROUP offers an exclusive FOR SALE elegant large 5-room apartment on Vincent Hložník Street in the Condominium Renaissance residential complex.</p>
                </div>
                <div className="h-[100px] w-1/2 shadow-lg ml-2 rounded-md">
                    <div className="m-[20px]">
                     <h1 className="text-lg font-semibold text-slate-700">Address</h1>
                    </div>
                </div>
            </div>
            <div className="col-span-12 w-full">
        <div>
          <h1 className="font-bold text-[20px] text-slate-700 p-[20px]">You might be interested in</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[35px]">
          {data.map((listing) => (
            <div key={listing.id} className="col-span-1 shadow-md hover:shadow-2xl">
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>
      </div>
        </main>
    )
}

export default ProductDeatils
