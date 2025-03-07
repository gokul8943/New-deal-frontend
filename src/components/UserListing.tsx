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
                const response = await getUserAddedListing(userId);

                if (response && response.data.userData) {
                    setListings(response.data.userData);
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
        <div className="">
            <div className="px-3 py-2">
                <h2 className="text-3xl font-bold mb-4  bg-gradient-to-br from-violet-600 via-emerald-800 to-pink-700 text-transparent bg-clip-text drop-shadow-xl">My Listings</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 py-4">
                {listings.length > 0 ? (
                    listings.map((listing) => (
                        <ListingCard key={listing._id} listing={listing} />
                    ))
                ) : (
                    <p className="col-span-3 text-center text-gray-500 py-8">No listings found</p>
                )}
            </div>
        </div>
    );
};

export default MyListing;
