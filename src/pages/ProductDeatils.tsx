import { useEffect, useState } from "react"
import { getOneListing } from "../service/api/user/lisiting.api"
import ListingCard from "../components/ListingCard"
import { MapPin, Expand, Bath, Bed, ArrowRight } from "lucide-react"
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { lid } = useParams<{ lid: string }>()
    const [data, setData] = useState<any[]>([])
    const [mainImage, setMainImage] = useState<string>("/api/placeholder/800/500")

    useEffect(() => {
      getOneListing(lid)
        .then((res) => {
            console.log('data',res);
          setData(res.data.response)
        }).catch((error) => {
          console.log(error);
        })
    }, [])

    const propertyDetails = [
        { icon: <MapPin className="text-blue-500 w-5 h-5" />, label: "City", value: "Kannur" },
        { icon: <Expand className="text-green-500 w-5 h-5" />, label: "Total Area", value: "1500 sqft" },
        { icon: <Bed className="text-purple-500 w-5 h-5" />, label: "Rooms", value: "3 Rooms" },
        { icon: <Bath className="text-teal-500 w-5 h-5" />, label: "Bathrooms", value: "3" }
    ]

    const additionalImages = [
        "/api/placeholder/200/150",
        "/api/placeholder/200/150",
        "/api/placeholder/200/150",
        "/api/placeholder/200/150"
    ]

    return (
        <main className="bg-gray-50 min-h-screen p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                {/* Property Header */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="md:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6 bg-gray-100">
                            <h1 className="text-3xl font-bold text-gray-800">Beautiful Modern House</h1>
                            <div className="flex items-center text-gray-600 mt-2">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>Kottiyoor, Kannur</span>
                            </div>
                        </div>
                        
                        {/* Main Image with Thumbnails */}
                        <div className="relative">
                            <img 
                                src={mainImage} 
                                alt="Property Main View" 
                                className="w-full h-[450px] object-cover"
                            />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {additionalImages.map((img, index) => (
                                    <img 
                                        key={index}
                                        src={img} 
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-16 h-16 object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100"
                                        onClick={() => setMainImage(img)}
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
                        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                            Contact Agent <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Description and Address */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
                        <p className="text-gray-600 leading-relaxed">
                            FEDORS GROUP offers an exclusive FOR SALE elegant large 5-room apartment on Vincent Hložník Street in the Condominium Renaissance residential complex. 
                            This beautiful property combines modern design with comfort, featuring spacious rooms, high-quality finishes, and a prime location.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Location</h2>
                        <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                            <p className="text-gray-500">Map Placeholder</p>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center text-gray-600">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>Kottiyoor, Kannur</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Listings */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">You Might Also Like</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.map((listing) => (
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
    )
}

export default ProductDetails