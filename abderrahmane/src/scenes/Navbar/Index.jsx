import React from "react";
import Link from "../../components/Link";
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { IconButton  } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Contact from "../../components/contact"
import Logo from "../../assets/Lahmidilogo.png";






const Index = ({Select, setSelect}) => {


    const menuPaperStyle = {backgroundColor: "#09203c",};
    const flexcontent = "flex justify-center items-center"
    const buttoncontact = "bg-bgbutton rounded w-[90px] h-[40px] text-fontprimary"
    const useMedia = useMediaQuery("(max-width:1060px)");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return ( 
        <nav className={`${flexcontent} bg-background drop-shadow  w-full py-5 z-30 fixed top-0`} >
            <div className={`${flexcontent} mx-auto w-5/6 `}>
              <div  className={`flex justify-between  w-full `}>
                 <img src={Logo} alt="lahmidi" className="mt-[12px] w-[150px] h-[20px]"/>
             {!useMedia ? (
              <>
                 <div className="flex gap-6 mt-[8px]">
                  <Link 
                  setSelect={setSelect} 
                  Select={Select} 
                  page="Home"/>
                  <Link                   
                  setSelect={setSelect} 
                  Select={Select} 
                  page="About Me"/>
                  <Link                   
                  setSelect={setSelect} 
                  Select={Select} 
                  page="Me Skills"/>
                  <Link                   
                  setSelect={setSelect} 
                  Select={Select} 
                  page="Me Projects"/>
                 </div>
                 <button className={buttoncontact}>
                    <Contact 
                    setSelect={setSelect}
                    children="Contact"
                    />
                   
                 </button>
                </>
             ) : (
                <>     
                <IconButton
                   onClick={handleClick}
                 >
                 {anchorEl === null ? <MenuIcon className="text-fontprimary" /> : <CloseIcon className="text-fontprimary" />}
                 </IconButton>
                 <Menu
                   PaperProps={{style: menuPaperStyle,}}
                   
                  
                   id="fade-menu"
                   MenuListProps={{
                     'aria-labelledby': 'fade-button',
                   }}
                   anchorEl={anchorEl}
                   open={open}
                   onClose={handleClose}
                   TransitionComponent={Fade}
                 >

                <div className="flex my-3 mx-3 space-y-2 flex-col">
                   <Link
                    setSelect={setSelect}
                    Select={Select}
                    page="Home" />
                   <Link
                       setSelect={setSelect}
                       Select={Select}
                       page="About Me" />
                   <Link
                       setSelect={setSelect}
                       Select={Select}
                       page="Me Skills" />  
                   <Link
                       setSelect={setSelect}
                       Select={Select}
                       page="Me Projects" />
                    <button className="text-fontprimary rounded h-[40px] w-[90px] bg-bgbutton">
                         <Contact
                       setSelect={setSelect}
                       children="Contact" />  
                    </button>
                    
               </div>
           </Menu>
               </>      
             )} 
              </div>
            </div>
        </nav>
     );
}
 
export default Index;
