import { useEffect, useState } from "react"
import ListingCard from "../components/ListingCard"
import { getListing } from "../service/api/user/lisiting.api"

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

const Lisitng = () => {
  const [data, setData] = useState<Listing[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, [page, search]);

  const fetchData = () => {
    getListing(page, search)
      .then((res) => {
        const sortedData = res.data.response.data.sort(
          (a: Listing, b: Listing) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setData(sortedData);
        setTotal(res.data.response.total);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // Reset to page 1 on new search
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < Math.ceil(total / 10)) setPage(page + 1);
  };

  return (
    <main className='grid grid-cols-12  gap-2 w-full p-[30px]'>
      <div className="h-[110px] col-span-12 w-full bg-gradient-to-r from-lime-100 to-indigo-100 rounded-lg p-[20px]">
        <div className="flex justify-center">
          <h1 className="text-slate-800 font-extrabold text-3xl">Search your dreams</h1>
        </div>
        <div className="flex justify-center m-1">
          <h1 className="text-slate-700 font-medium text-md">Choose from the most advanteogous offers</h1>
        </div>
      </div>
      <div className="col-span-12 w-full  h-[130px] ">
        <div className="p-2  flex justify-center">
        <input
            className="p-2 w-[400px] rounded-full outline outline-black"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {data.map((listing) => (
      <div key={listing.id} className="col-span-3 md:col-span-3 lg:col-span-3 sm:col-span-4 m-2 shadow-md hover:shadow-2xl">
        <ListingCard listing={listing}/>
      </div>
    ))}
     <div className="col-span-12 flex justify-center gap-4 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === Math.ceil(total / 10)}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  )
}

export default Lisitng
