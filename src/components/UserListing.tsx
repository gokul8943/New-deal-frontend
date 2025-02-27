import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { getUserAddedListing } from "../service/api/user/lisiting.api";
import { useParams } from "react-router-dom";

const MyListing = () => {

    const [listings, setListings] = useState([]);
    const { userId } = useParams()

    useEffect(() => {
        const fetchUserListing = async () => {
            try {
                const response = await getUserAddedListing(userId); 
                console.log(response.data);
                
                setListings(response.data || []); // Ensure it's an array
            } catch (error) {
                console.error("Error fetching user listings:", error);
            }
        };

        fetchUserListing();
    }, [userId]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.length > 0 ? (
                listings.map((listing) => <ListingCard key={undefined} listing={listing} />)
            ) : (
                <p className="text-center text-gray-500">No Listings Found</p>
            )}
        </div>
    );
};

export default MyListing;
