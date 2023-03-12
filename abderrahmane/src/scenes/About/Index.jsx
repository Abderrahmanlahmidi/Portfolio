import React from "react";
import profile from "../../assets/lahmidi.png"


const Index = () => {
    return ( 
        <section id="aboutme" className="justify-center bg-background py-6 flex w-full items-center">
            <div className="justify-center  w-5/6 h-5/6 mx-auto flex flex-col items-center">
               <div className="flex justify-center items-center w-full">
                  <h1 className="text-center text-fontprimary font-semibold mb-6 text-[40px]"> About Me </h1>
               </div>
               <div className="md:flex justify-center items-center w-full" >
                  <img src={profile} className="md:mr-[40px] md:ml-0 ml-[70px] md:mb-0 mb-[30px] md:justify-start flex justify-center w-[250px]" alt="PhotoProfile"/>
                  <p className="max-w-[40pc] text-fontsecondary text-center md:text-start">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laboriosam, facilis inventore minus sapiente rem molestiae totam minima eveniet tenetur perferendis, suscipit nihil molestias alias animi cum possimus est explicabo, fugit exercitationem necessitatibus sint voluptates. Ullam tenetur iste iure illo praesentium aliquid provident neque illum, corrupti sunt? Molestias quisquam laboriosam a ullam sunt. Quo saepe dolores culpa nam unde delectus quibusdam explicabo pariatur magni porro, consequuntur est voluptas quia placeat?
                  </p>
               </div>
            </div>
        </section>
     );
}
 
export default Index;