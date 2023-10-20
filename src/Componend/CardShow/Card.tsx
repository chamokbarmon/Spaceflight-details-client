import { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)


  const dataLength = data.length

  const pages = Math.ceil(dataLength / pageSize);
  console.log(pages);
  

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
   <div>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
      {data?.splice(0,9)?.map((show: any) => (
        <div className="card border w-[424px] h-[393.4px] mt-10 bg-base-100 shadow-xl p-4">
          <figure className="w-[124px] h-[124px] mx-auto ">
            <img
              src={show?.links?.mission_patch_small}
              alt="rocket"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Launch Date:{show?.launch_date_local}
            </h2>
            <h1>{show?.mission_name}</h1>
            <h3>{show?.launch_date_utc}</h3>
            <div className="card-actions">
              <button className="btn btn-primary">success</button>
            </div>
          </div>
        </div>
      ))}
      
    </div>
    <div className="m-auto flex justify-center mt-20 align-middle ">
      
        {
            [...Array(pages).keys()].map(number=>
            <button className="btn btn-active" key={number}
            onClick={()=>setPage(number)}
            >
            {number}
            </button>)
        }
      </div>
   </div>
  );
};

export default Card;
