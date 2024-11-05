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
        <div className="h-3/4 border border-red-100 rounded-t-lg">
        {listing.image.length > 0 ? (
          <img src={listing.image[0].thumbUrl} alt={listing.title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full flex items-center justify-center bg-gray-200"> {/* Placeholder for no image */}
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
