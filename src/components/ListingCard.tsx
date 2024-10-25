import React from "react";

interface Listing {
  id: string;
  title: string;
  price: number;
  type:string
  description: string;
}

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {


  return (
    <>
      <div className="h-[400px] rounded-lg">
        <div className="h-3/4 border border-red-100 rounded-t-lg">

        </div>
        <div className="border border-fuchsia-200 border-l-4 h-1/4 rounded-b-lg">
          <div className="m-[10px] ">
            <h1 className="text-slate-800 text-lg font-bold">{listing.title}</h1>
            <h1 className="text-slate-800 text-base font-bold">{listing.price.toLocaleString()}</h1>
            <h1 className="text-slate-800 text-base font-bold">{listing.type}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingCard
