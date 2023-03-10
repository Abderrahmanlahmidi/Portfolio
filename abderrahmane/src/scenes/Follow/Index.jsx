import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {GitHup, Twitter, Linkedin,Instagram} from "../../data";




const Index = () => {


    
    const iconButtonStyle = {
        width: 30,
        height: 30,
      };

    return ( 
        <section id="meskills" className="justify-center  bg-background py-6 flex items-center w-full ">
            <div className="justify-center w-5/6 h-5/6 flex items-center ">
              <div className="w-full flex-col mb-3 justify-center flex items-center">
                 <div className="justify-center  w-full flex items-center">
                    <h1 className=" mb-3 text-fontprimary text-[35px]">Follow me</h1>
                 </div>

                
                 <div className="flex z-30 gap-[40px]">
                    <button onClick={GitHup} className="bg-card transition delay-100 hover:bg-bgbutton rounded h-[50px] w-[50px]">
                        <GitHubIcon style={iconButtonStyle} className="text-fontsecondary"/>
                    </button>
                    <button onClick={Twitter} className="bg-card rounded transition delay-100 hover:bg-bgbutton h-[50px] w-[50px]">
                        <TwitterIcon style={iconButtonStyle} className="text-fontsecondary"/>
                    </button>
                    <button onClick={Linkedin} className="bg-card transition delay-100 hover:bg-bgbutton rounded h-[50px] w-[50px]">
                        <LinkedInIcon style={iconButtonStyle} className="text-fontsecondary"/>
                    </button>
                    <button onClick={Instagram} className="bg-card transition delay-100 hover:bg-bgbutton rounded h-[50px] w-[50px]">
                        <InstagramIcon style={iconButtonStyle} className="text-fontsecondary"/>
                    </button>
                 </div>
              </div>
            </div>
        </section>
     );
}
 
export default Index;
