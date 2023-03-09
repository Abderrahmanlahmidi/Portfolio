import React from "react";
import { myData } from "../../data";






const Index = () => {
    return ( 
        <section id="meskills" className="justify-center bg-background py-6 flex items-center w-full ">
            <div className="justify-center w-5/6 h-5/6 flex items-center ">
              <div className="w-full flex-col mb-3 justify-center flex items-center">
                 <div className="justify-center  w-full flex items-center">
                    <h1 className="font-semibold mb-[30px]   text-fontprimary text-[40px]">My Portfolio Skills</h1>
                 </div>
                 <div className="justify-center   grid-container items-center w-full">
                  {myData.map((data) => (
                    
                         <div className="flex items-center rounded cursor-pointer transition delay-100 hover:bg-bgbutton justify-center w-[160px] h-[180px] drop-shadow-lg	 flex-col bg-card ">
                        <img src={data.Source} alt="Html" className="w-[80px]" />
                        <p className="text-fontprimary mt-[20px]">{data.title}</p>
                      </div>
                       ))}
                 </div>
              </div>
            </div>
        </section>
     );
}
 
export default Index;
