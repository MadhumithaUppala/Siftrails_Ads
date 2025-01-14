import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdsComponent from "./AdsComponent";

import { IMAGES } from "@/assets/imgs/Images";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Search = () => {
  const image2 = 'https://cdn.dribbble.com/users/5297140/screenshots/13995477/media/3769cfb75e2e53734862cc0a3bc1c732.gif'
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search-result/${from}/${to}`);
  };
  
  return (
    <div>
      <img
        src={IMAGES.heroHeader}
        alt="train"
        className="w-full h-[300px] object-cover"
      />
     


     <AdsComponent image={image2} />

      <div className="m-10">
        <Card className="p-5">
          <CardHeader>
            <CardTitle>Search for trains</CardTitle>
            <CardDescription>Find your next destination</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch}>
              <div className="grid w-full items-center gap-8 mt-7">
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="from" className="font-semibold">
                      From
                    </label>
                    <input
                      id="from"
                      value={from}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      onChange={(e) => setFrom(e.target.value)}
                      placeholder="Enter your starting location"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="to" className="font-semibold">
                      To
                    </label>
                    <input
                      id="to"
                      value={to}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      onChange={(e) => setTo(e.target.value)}
                      placeholder="Enter your destination"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="date" className="font-semibold">
                      Date
                    </label>
                    <input
                      id="date"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      type="date"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="time" className="font-semibold">
                      Time
                    </label>
                    <input
                      id="time"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      type="time"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <button
                    type="submit"
                    className="bg-[#5a3970] hover:bg-[#482e5a] font-medium border-2 border-transparent hover:border-[#7e529e] shadow-md transition text-white p-2 rounded"
                  >
                    Search for trains
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Search;
