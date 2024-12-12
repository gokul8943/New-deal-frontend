import { useEffect, useState } from "react"
import ListingCard from "../components/ListingCard"
import { getListing } from "../service/api/user/lisiting.api"
import { Button, Input, message } from "antd";
import homeimage from '../assets/images/newhome1.jpg'
import { useNavigate } from "react-router-dom";

interface Image {
  uid: string;
  name: string;
  size: number;
  type: string;
  thumbUrl: string;
}

interface Listing {
  id: string;
  createdAt:string;
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
        setData([]); // Fallback to empty array on error
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
    // Here you can add the API call to submit the newsletter subscription
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
      <div className="col-span-12 min-h-[500px] bg-gradient-to-r from-indigo-200 to-lime-200 rounded-2xl m-[30px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
        <div className="grid md:grid-cols-2 h-full">
          <div className="flex flex-col justify-center px-8 md:px-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Find Your Dream <span className="text-gray-700">Property</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-xl">
              Discover the perfect property that matches your lifestyle. From luxury homes to affordable apartments, we've got everything you need.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="large" type="primary" className="bg-indigo-600 hover:bg-indigo-700" onClick={handleExploreClick}>
                Explore Properties
              </Button>
              <Button size="large" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"  onClick={handleAddPropertyClick}>
                List Your Property
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center rounded-lg">
            <img src={homeimage} alt="Modern House" className="max-w-md transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <div className="col-span-12 py-16 px-[30px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Everything Should Be This Easy
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We've simplified the real estate process to make your journey seamless and enjoyable.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-yellow-600">🏠</span>
            </div>
            <h3 className="text-xl font-bold text-yellow-700 mb-3">Buy</h3>
            <p className="text-slate-600">Find your place with an immersive photo experience and the most listings.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-600">💰</span>
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-3">Sell</h3>
            <p className="text-slate-600">Whether selling or renting, we can help you move forward with confidence.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-green-600">🔑</span>
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-3">Rent</h3>
            <p className="text-slate-600">We're creating a seamless online experience from shopping to signing.</p>
          </div>
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

      <div className="col-span-12 bg-white p-16 m-[30px] rounded-xl shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Trust the Professionals
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We are a global, boutique real estate brokerage committed to delivering exceptional results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <p className="text-gray-600">Properties Sold</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="col-span-12 bg-gradient-to-r from-indigo-600 to-blue-600 p-16 m-[30px] rounded-xl shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Ahead of the Market
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Subscribe to our newsletter and never miss out on the latest properties and market insights
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Input
              placeholder="Enter your email"
              size="large"
              className="max-w-md text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              prefix={<span className="text-gray-400">✉️</span>}
            />
            <Button
              size="large"
              className="bg-white text-indigo-600 hover:bg-gray-50 font-semibold px-8"
              onClick={handleNewsletterSubmit}
            >
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
