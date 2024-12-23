import { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { getListing } from "../service/api/user/lisiting.api";
import { Input, Pagination, Select, Radio, Space, Button } from "antd";
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
  createdAt: string;
  title: string;
  price: number;
  type: string;
  description: string;
  image: Image[];
}

// Add new type for sorting
type SortOption = "newest" | "oldest" | "price-high" | "price-low";

const Listing = () => {
  const [data, setData] = useState<Listing[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [propertyType, setPropertyType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const navigate = useNavigate()

  useEffect(() => {
    fetchData();
  }, [page, search, sortBy, propertyType, priceRange]);

  const fetchData = () => {
    getListing(page, search)
      .then((res) => {
        let sortedData = res.data.response.data;

        // Apply sorting
        switch (sortBy) {
          case "newest":
            sortedData.sort(
              (a: Listing, b: Listing) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
            break;
          case "oldest":
            sortedData.sort(
              (a: Listing, b: Listing) =>
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
            break;
          case "price-high":
            sortedData.sort((a: Listing, b: Listing) => b.price - a.price);
            break;
          case "price-low":
            sortedData.sort((a: Listing, b: Listing) => a.price - b.price);
            break;
        }

        // Apply filters
        if (propertyType !== "all") {
          sortedData = sortedData.filter(
            (item: Listing) => item.type === propertyType
          );
        }

        if (priceRange !== "all") {
          const [min, max] = priceRange.split("-").map(Number);
          sortedData = sortedData.filter(
            (item: Listing) =>
              item.price >= min && (max ? item.price <= max : true)
          );
        }

        setData(sortedData);
        setTotal(res.data.response.total);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleListingClick = (lid: string) => {
    window.open(`/detailpage/${lid}`, '_blank');
  };

  const handleAddPropertyClick = () => {
    navigate('/AddProduct');
  };


  return (
    <main className="grid grid-cols-12 gap-2 w-full p-[30px]">
      {/* Header Section */}
      <div className="h-[110px] col-span-12 w-full bg-gradient-to-r from-lime-100 to-indigo-100 rounded-lg p-[20px]">
        <div className="flex justify-center">
          <h1 className="text-slate-800 font-extrabold text-3xl">
            Search your dreams
          </h1>
        </div>
        <div className="flex justify-center m-1">
          <h1 className="text-slate-700 font-medium text-md">
            Choose from the most advantageous offers
          </h1>
        </div>
      </div>

      {/* Filters Section */}
      <div className="col-span-12 w-full h-auto">
        <div className="p-2 flex flex-col gap-4">
          {/* Search Input */}
          <div className="flex justify-center items-center gap-20">
            <Input
              className="p-2 w-[400px] rounded-full"
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          {/* Sort and Filters */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Select
              className="min-w-[200px]"
              placeholder="Sort by"
              value={sortBy}
              onChange={(value: SortOption) => setSortBy(value)}
              options={[
                { value: "newest", label: "Newest First" },
                { value: "oldest", label: "Oldest First" },
                { value: "price-high", label: "Price: High to Low" },
                { value: "price-low", label: "Price: Low to High" },
              ]}
            />

            <Radio.Group
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="flex-wrap"
            >
              <Space wrap>
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="house">House</Radio.Button>
                <Radio.Button value="apartment">Apartment</Radio.Button>
                <Radio.Button value="home">Villa</Radio.Button>
              </Space>
            </Radio.Group>

            <Select
              className="min-w-[200px]"
              placeholder="Price Range"
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
              options={[
                { value: "all", label: "All Prices" },
                { value: "0-100000", label: "$0 - $100,000" },
                { value: "100000-300000", label: "$100,000 - $300,000" },
                { value: "300000-500000", label: "$300,000 - $500,000" },
                { value: "500000-1000000", label: "$500,000 - $1,000,000" },
                { value: "1000000-", label: "Over $1,000,000" },
              ]}
            />
          </div>
          <div className="flex justify-end">
              <Button onClick={handleAddPropertyClick} className="rounded-lg bg-gradient-to-r from-violet-400 to-violet-600 text-base text-white font-bold">List Your Property</Button>
            </div>
        </div>
      </div>

      {/* Listing Cards */}
      {data.length > 0 ? (
        data.map((listing) => (
          <div
            key={listing.id}
            className="col-span-3 md:col-span-3 lg:col-span-3 sm:col-span-4 m-2 shadow-md hover:shadow-2xl cursor-pointer"
            onClick={() => handleListingClick(listing.id)}
          >
            <ListingCard listing={listing} />
          </div>
        ))
      ) : (
        <div className="col-span-12 flex justify-center mt-4">
          <h2 className="text-slate-600 font-bold text-xl">No property found</h2>
        </div>
      )}

      {/* Pagination */}
      <div className="col-span-12 flex justify-center gap-4 mt-4">
        <Pagination
          current={page}
          pageSize={10}
          total={total}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </main>
  );
};

export default Listing;
