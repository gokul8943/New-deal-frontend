import React from "react";
interface Image {
  uid: string;
  name: string;
  size: number;
  type: string;
  thumbUrl: string;
}
interface Listing {
  id: string;
  title: string;
  price: number;
  type: string
  description: string;
  image: Image[];
}

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {


  return (
    <>
      <div className="h-[400px] rounded-lg">
        <div className="h-3/4 border border-red-100 rounded-t-lg w-full relative">
        {listing.image.length > 0 ? (
          <img 
            src={listing.image[0].thumbUrl} 
            alt={listing.title} 
            className="absolute inset-0 h-full w-full object-cover rounded-t-lg" 
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-t-lg">
            <span>No Image Available</span>
          </div>
        )}
        </div>
        <div className="border border-fuchsia-200 border-l-4 h-1/4 rounded-b-lg">
          <div className="m-[10px] ">
            <h1 className="text-slate-800 text-lg font-bold">{listing.title}</h1>
            <h1 className="text-slate-800 text-sm font-bold">{listing.type}</h1>
            <h1 className="text-slate-800 text-base font-bold">{listing.price.toLocaleString()}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingCard
