import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { getUserAddedListing } from "../service/api/user/lisiting.api";


interface MyListingProps {
    userId: any; 
  }

  interface Image {
    uid: string;
    name: string;
    size: number;
    type: string;
    thumbUrl: string;
  }

  interface Listing {
    _id: string;
    id: string;
    createdAt: string;
    title: string;
    price: number;
    type: string;
    description: string;
    image: Image[];
  }
  
const MyListing = ({ userId  }: MyListingProps) => {
    const [listings, setListings] = useState<Listing[]>([]);

    console.log('Using userId in MyListing:', userId);

    useEffect(() => {
        const fetchUserListing = async () => {
            try {
                const response = await getUserAddedListing(userId); 
                console.log(response.data);
                
                setListings(response.data || []); 
            } catch (error) {
                console.error("Error fetching user listings:", error);
            }
        };

        fetchUserListing();
    }, [userId]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {listings.length > 0 ? (
                listings.map((listing) => (
                    <ListingCard 
                        key={listing._id || `listing-${Math.random()}`} 
                        listing={listing} 
                    />
                ))
            ) : (
                <p className="col-span-3 text-center text-gray-500 py-8">No listings found</p>
            )}
        </div>
    );
};

export default MyListing;
