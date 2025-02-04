import { useEffect, useState } from "react";
import { getOneListing } from "../service/api/user/lisiting.api";
import ListingCard from "../components/ListingCard";
import { MapPin, Expand, Star, Home, Calendar, DollarSign } from "lucide-react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { lid } = useParams<{ lid: string }>();
    const [data, setData] = useState<any | null>(null);
    const [mainImage, setMainImage] = useState<string>("");

    useEffect(() => {
        if (!lid) return;
        getOneListing(lid)
            .then((res) => {
                console.log("data", res.data.data.image);
                const listing = res.data.data;
                setData(listing);
                if (listing?.image?.[0]?.thumbUrl) {
                    setMainImage(listing.image[0].thumbUrl); 
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [lid]);

    if (!data) {
        return (
            <main className="bg-gray-50 min-h-screen p-6 md:p-10 flex items-center justify-center">
                <p className="text-gray-600 text-lg">Loading...</p>
            </main>
        );
    }

    const propertyDetails = [
        { icon: <Home className="text-blue-500 w-5 h-5" />, label: "Type", value: data.type || "N/A" },
        { icon: <DollarSign className="text-green-500 w-5 h-5" />, label: "Price", value: `$${data.price?.toLocaleString() || "N/A"}` },
        { icon: <Expand className="text-purple-500 w-5 h-5" />, label: "Status", value: data.status || "N/A" },
        { icon: <Calendar className="text-teal-500 w-5 h-5" />, label: "Listed On", value: new Date(data.createdAt).toLocaleDateString() || "N/A" },
    ];

    return (
        <main className="bg-gray-50 min-h-screen p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                {/* Property Header */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="md:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6 bg-gray-100">
                            <h1 className="text-3xl font-bold text-gray-800">{data.title || "Property Title"}</h1>
                            <div className="flex items-center text-gray-600 mt-2">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>{data.location || "Unknown Location"}</span>
                            </div>
                        </div>

                        {/* Main Image with Thumbnails */}
                        <div className="relative">
                            <img
                                src={mainImage || "/placeholder.jpg"}
                                alt="Property Main View"
                                className="w-full h-[450px] object-cover"
                            />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {data.image?.map((img: any, index: number) => (
                                    <img
                                        key={index}
                                        src={img.thumbUrl}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-16 h-16 object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100"
                                        onClick={() => setMainImage(img.thumbUrl)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Property Characteristics */}
                    <div className="md:w-1/3 bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Property Details</h2>
                        <div className="space-y-4">
                            {propertyDetails.map((detail, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b pb-3 last:border-b-0"
                                >
                                    <div className="flex items-center space-x-3">
                                        {detail.icon}
                                        <span className="font-semibold text-gray-700">{detail.label}</span>
                                    </div>
                                    <span className="text-gray-600">{detail.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="md:col-span-2 bg-white rounded-xl p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{data.description || "No description available."}</p>
                    </div>
                    </div>
                </div>

                {/* Description and Address */}
                {/* <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{data.description || "No description available."}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Location</h2>
                        <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                            <p className="text-gray-500">Map Placeholder</p>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center text-gray-600">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>{data.address || "No address available"}</span>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Availability Section */}
                {data.availability && data.availability.length > 0 && (
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Availability</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data.availability.map((availability: string, index: number) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    <span className="text-gray-700">{availability}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Similar Listings */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">You Might Also Like</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.similarListings?.map((listing: any) => (
                            <div 
                                key={listing.id} 
                                className="transform transition duration-300 hover:scale-105"
                            >
                                <ListingCard listing={listing} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetails;