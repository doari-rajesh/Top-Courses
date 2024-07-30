import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Shimmer from "./components/Shimmer";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";


function App() {
  const [category, setCategory] = useState(filterData[0].title);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState({});

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // console.log(data);
      setCourses(data?.data);
    } catch (error) {
      console.log("Error in fetching data......");
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" bg-bgDark2 min-h-screen pb-14">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        <div className="w-11/12 max-w-[1200px] mx-auto">
          {loading ? (
            <div className="text-3xl text-white font-bold flex items-center justify-center min-h-[50vh]">
              <Shimmer/>
            </div>
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
