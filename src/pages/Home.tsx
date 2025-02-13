import { useEffect, useState } from "react"
import ListingCard from "../components/ListingCard"
import { getListing } from "../service/api/user/lisiting.api"
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import RentalCard from "../components/RentalCard";
import SellCard from "../components/SellCard";
import BuyCard from "../components/BuyCard";
import HomePageHeader from "../components/HomePageHeader";
import ProffessionalCard from "../components/ProffessionalCard";
import NewLetterCard from "../components/NewLetterCard";

interface Image {
  uid: string;
  name: string;
  size: number;
  type: string;
  thumbUrl: string;
}

interface Listing {
  id: string;
  createdAt: string;
  title: string;
  price: number;
  type: string;
  description: string;
  image: Image[];
}
const Home = () => {
  const [data, setData] = useState<Listing[]>([]);
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    getListing()
      .then((res) => {
        const listings = Array.isArray(res.data.response.data) ? res.data.response.data : [];
        setData(listings);
      })
      .catch((error) => {
        console.error("Failed to fetch listings:", error);
        setData([]);
      });
  }, []);

  const handleNewsletterSubmit = () => {
    if (!email) {
      message.error("Please enter your email address");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      message.error("Please enter a valid email address");
      return;
    }

    message.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };
  const handleExploreClick = () => {
    navigate('/listing');
  };

  const handleAddPropertyClick = () => {
    navigate('/AddProduct');
  };

  return (
    <main className='grid grid-cols-12 w-full'>
      <HomePageHeader onclick={handleExploreClick} propertyClick={handleAddPropertyClick} />

      <div className="col-span-12 py-16 px-[30px] bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Your Real Estate Journey Starts Here
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Choose your path and let us guide you through every step of the process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* Buy Card */}
          <BuyCard onclick={handleExploreClick} />

          {/* Sell Card */}
          <SellCard onclick={handleAddPropertyClick} />

          {/* Rent Card */}
          <RentalCard onClick={handleExploreClick} />
        </div>
      </div>

      <div className="col-span-12 bg-gray-50 py-16 px-[30px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800">Recently Added</h2>
            <Button type="link" className="text-indigo-600 hover:text-indigo-700" onClick={handleExploreClick}>
              View All Properties →
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.slice(-4).map((listing) => (
              <div key={listing.id} className="transform hover:-translate-y-1 transition-all duration-300">
                <ListingCard listing={listing} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProffessionalCard />

      <NewLetterCard
        email={email}
        setEmail={setEmail}
        onclick={handleNewsletterSubmit} />

    </main>
  )
}

export default Home
