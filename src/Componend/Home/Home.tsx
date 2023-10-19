import "./Home.css";

const Home = () => {
  return (
    //highlight Spaceflight

    <div className="">
      <div>
        <h1 className="spaceflight">Spaceflight details </h1>
        <p className="findOut md:findOut sm:findOut">

          Find out the elaborate features of all the past big spaceflights.
        </p>
      </div>
      <p className="flex justify-end mt-10   md:flex md:justify-end sm:flex sm:justify-end">
        <input type="checkbox" /> Show upcoming only
      </p>
   <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 sm:grid-cols-1 ">
   <div >
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered mt-[50px] ml-[50px]  rounded-[4px] w-[424px] h-[38px] max-w-xs"
          />
          <button className="p-[7px, 13px, 7px, 13px] w-[42px] h-[38px]  mt-[50px]  rounded-r-lg hover:bg-[#0D6EFD] bg-[#0D6EFD]">
            <svg
              className="align-middle m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_577_472)">
                <path
                  d="M11.7417 10.3431C12.71 9.02181 13.1437 7.38361 12.956 5.75627C12.7683 4.12893 11.9731 2.63246 10.7294 1.56625C9.48579 0.500045 7.88543 -0.0572725 6.24851 0.00580065C4.6116 0.0688738 3.05886 0.747686 1.90095 1.90643C0.743029 3.06518 0.0653277 4.6184 0.00342583 6.25536C-0.058476 7.89231 0.499986 9.49228 1.56708 10.7352C2.63418 11.9781 4.13122 12.7722 5.7587 12.9587C7.38617 13.1452 9.02406 12.7104 10.3447 11.7411H10.3437C10.3737 11.7811 10.4057 11.8191 10.4417 11.8561L14.2917 15.7061C14.4792 15.8938 14.7336 15.9992 14.9988 15.9993C15.2641 15.9994 15.5185 15.8941 15.7062 15.7066C15.8938 15.5191 15.9993 15.2647 15.9994 14.9995C15.9995 14.7342 15.8942 14.4798 15.7067 14.2921L11.8567 10.4421C11.8209 10.4059 11.7825 10.3725 11.7417 10.3421V10.3431ZM11.9997 6.49912C11.9997 7.22139 11.8574 7.93659 11.581 8.60388C11.3046 9.27117 10.8995 9.87749 10.3888 10.3882C9.87804 10.8989 9.27173 11.3041 8.60444 11.5805C7.93715 11.8569 7.22195 11.9991 6.49968 11.9991C5.77741 11.9991 5.06221 11.8569 4.39492 11.5805C3.72763 11.3041 3.12131 10.8989 2.61059 10.3882C2.09987 9.87749 1.69474 9.27117 1.41834 8.60388C1.14194 7.93659 0.999677 7.22139 0.999677 6.49912C0.999677 5.04043 1.57914 3.64149 2.61059 2.61004C3.64204 1.57859 5.04099 0.999124 6.49968 0.999124C7.95837 0.999124 9.35731 1.57859 10.3888 2.61004C11.4202 3.64149 11.9997 5.04043 11.9997 6.49912Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_577_472">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      
      </div>
    
     
        <div className="m-auto mt-[50px]  ">
          <select className="border flex justify-between w-[256px] h-[38px]" name="cars" id="cars">
            <option value="volvo">By Launch Status :</option>
         
          </select>
        </div>
        
        <div className="m-auto   mt-[50px]  ">
          <select className="border flex justify-between w-[256px] h-[38px]" name="cars" id="cars">
            <option value="volvo">By Launch Date :</option>
            <option value="saab">Last Week</option>
            <option value="opel">Last Month</option>
            <option value="audi">Last Year</option>
          </select>
        </div>

   </div>


    </div>
  );
};

export default Home;
