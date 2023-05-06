import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {
  const [records, setRecords] = useState(null);
  const url = "https://api.tvmaze.com/search/shows?q=all";


  useEffect(() => {
    axios.get(url).then((response) => {
      setRecords(response.data);
    });
  }, [url]);



  return <>
   
        <div className="flex-col">
          {records &&
            records.map((title) => (
                <div className="">
                <Card
                key={title.show.id}
                moviename={title.show.name}
                imageurl={title.show.image?.medium}
                />
                </div>
            ))}
        </div>
      
  </>;
};

export default Main;
