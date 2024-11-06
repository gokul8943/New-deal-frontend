import { useEffect, useState } from "react"
import ListingCard from "../components/ListingCard"
import { getListing } from "../service/api/user/lisiting.api"
import { Input, Pagination } from "antd";

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
    setPage(1); 
  };

  const handlePageChange = (page: number) => {
    setPage(page);
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
        <div className="p-2 flex justify-center">
        <Input
            className="p-2 w-[400px] rounded-full  "
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {data.length > 0 ? (
        data.map((listing) => (
          <div key={listing.id} className="col-span-3 md:col-span-3 lg:col-span-3 sm:col-span-4 m-2 shadow-md hover:shadow-2xl">
            <ListingCard listing={listing} />
          </div>
        ))
      ) : (
        <div className="col-span-12 flex justify-center mt-4">
          <h2 className="text-slate-600 font-bold text-xl">No property found</h2>
        </div>
      )}
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
  )
}

export default Lisitng
