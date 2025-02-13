import { useEffect, useState } from "react"
import ListingCard from "../components/ListingCard"
import { getListing } from "../service/api/user/lisiting.api"
import { Button, Input, message } from "antd";
import homeimage from '../assets/images/newhome1.jpg'
import { useNavigate } from "react-router-dom";
import RentalCard from "../components/RentalCard";

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
      <div className="col-span-12 min-h-[600px] bg-gradient-to-r from-indigo-100 via-purple-50 to-blue-100 rounded-2xl m-[30px] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="grid md:grid-cols-2 h-full relative">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-8 md:px-16 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/90 rounded-full py-2 px-4 shadow-md w-fit">
              <span className="animate-pulse h-3 w-3 bg-green-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-600">Live Properties Available</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Find Your Dream{' '}
              <span className="relative">
                <span className="relative z-10 text-indigo-600">Property</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path fill="currentColor" d="M0 5 Q 25 0, 50 5 Q 75 10, 100 5 L 100 10 L 0 10 Z"></path>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 max-w-xl leading-relaxed">
              Discover the perfect property that matches your lifestyle. From luxury homes
              to affordable apartments, we've got everything you need.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="large"
                type="primary"
                className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8 flex items-center gap-2 text-base"
                onClick={handleExploreClick}
              >
                <span>Explore Properties</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button
                size="large"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 h-12 px-8 flex items-center gap-2 text-base"
                onClick={handleAddPropertyClick}
              >
                <span>List Your Property</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-indigo-600">2000+</div>
                <div className="text-sm text-gray-600">Properties</div>
              </div>
              <div className="border-l border-gray-200 pl-8">
                <div className="text-2xl font-bold text-indigo-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="border-l border-gray-200 pl-8">
                <div className="text-2xl font-bold text-indigo-600">10+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex items-center justify-center p-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/10 rounded-full blur-3xl"></div>
            <img
              src={homeimage}
              alt="Modern House"
              className="max-w-md w-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 relative z-10"
            />

            {/* Floating Card */}
            <div className="absolute bottom-12 -left-8 bg-white rounded-xl shadow-lg p-4 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Trusted Platform</div>
                  <div className="text-xs text-gray-500">Verified Properties</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 relative">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Buy Property</h3>
              <p className="text-white/90">Find your dream home today</p>
              <div className="absolute -bottom-6 right-6 w-20 h-20 bg-yellow-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Browse extensive property listings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Schedule virtual tours
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Get expert buying guidance
                </li>
              </ul>
              <Button
                className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white border-none h-12"
                onClick={handleExploreClick}
              >
                Start Browsing
              </Button>
            </div>
          </div>

          {/* Sell Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 p-6 relative">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Sell Property</h3>
              <p className="text-white/90">List your property with confidence</p>
              <div className="absolute -bottom-6 right-6 w-20 h-20 bg-blue-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Professional property valuation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Marketing strategy support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Dedicated selling agent
                </li>
              </ul>
              <Button
                className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white border-none h-12"
                onClick={handleAddPropertyClick}
              >
                List Property
              </Button>
            </div>
          </div>

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
