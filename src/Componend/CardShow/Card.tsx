import { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1)
  const [postperpage, setPostPerPage] = useState(9)
  const dataLength = data.length


  

  useEffect(() => {
    setLoading(true)
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

 
  const lastPost = currentpage * postperpage ;
  const firstPost = lastPost - postperpage ;
  const currentPosts =  data.splice(firstPost, lastPost)
  console.log(currentPosts);
  


  return (
   <div>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
      {currentPosts?.map((show: any) => (
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
              <button className="btn bg-[#198754] text-white">success</button>
            </div>
          </div>
        </div>
      ))}
      
    </div>
   
   </div>
  );
};

export default Card;
