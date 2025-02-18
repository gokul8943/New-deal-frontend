import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import useAuthStore from "../store/authStore";
import { getUserAddedListing } from "../service/api/user/lisiting.api";

const MyListing = () => {
    const { authState } = useAuthStore();
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchUserListing = async () => {
            try {
                const userId = authState.user._id;
                const response = await getUserAddedListing(userId); 
                console.log(response.data);
                
                setListings(response.data || []); // Ensure it's an array
            } catch (error) {
                console.error("Error fetching user listings:", error);
            }
        };

        fetchUserListing();
    }, [authState.user._id]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.length > 0 ? (
                listings.map((listing) => <ListingCard key={listing._id} listing={listing} />)
            ) : (
                <p className="text-center text-gray-500">No Listings Found</p>
            )}
        </div>
    );
};

export default MyListing;
