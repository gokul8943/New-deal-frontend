import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { getUserAddedListing } from "../service/api/user/lisiting.api";

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

interface MyListingProps {
    userId: string; 
}

const MyListing = ({ userId }: MyListingProps) => {
    
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserListing = async () => {
            if (!userId) {
                setError("User ID is not available");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await getUserAddedListing(userId); // ✅ API request with userId in params
                console.log("User listings response:", response.data);

                if (response && response.data) {
                    setListings(response.data);
                } else {
                    setListings([]);
                }
            } catch (error) {
                console.error("Error fetching user listings:", error);
                setError("Failed to fetch listings");
            } finally {
                setLoading(false);
            }
        };

        fetchUserListing();
    }, [userId]);

    if (loading) {
        return <div className="col-span-3 text-center py-8">Loading your listings...</div>;
    }

    if (error) {
        return <div className="col-span-3 text-center text-red-500 py-8">{error}</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.length > 0 ? (
                listings.map((listing) => (
                    <ListingCard key={listing._id} listing={listing} />
                ))
            ) : (
                <p className="col-span-3 text-center text-gray-500 py-8">No listings found</p>
            )}
        </div>
    );
};

export default MyListing;
