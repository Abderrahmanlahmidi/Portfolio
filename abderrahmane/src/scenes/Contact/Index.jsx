import React, { useState } from "react";
import {TextField, Alert} from "@mui/material"



const Index = () => {
    //the state form
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Message, setMessage] = useState("");
    
    //errors
    const [ErrorFirstname, setErrorFirstname] = useState(false);
    const [ErrorLastname, setErrorLastname] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState(false);
    const [ErrorFirstnameMessage, setErrorFirstnameMessage] = useState("");
    const [ErrorLastnameMessage, setErrorLastnameMessage] = useState("");
    const [ErrorMessageMessage, setErrorMessageMessage] = useState("");

    //Sucess
    const [Sucess, setSucess] = useState("")

     


    const handleSubmit = (e) => {

      e.preventDefault()
     

      if(Firstname && Lastname && Message) {
        setSucess("your message has been successflly")
        console.log(Firstname,Lastname,Message,) 
      }

      if(Firstname === "") {
        setErrorFirstnameMessage("error firstname is empty")
        setErrorFirstname(true)
      }
      if(Lastname === "") {
        setErrorLastnameMessage("error lastname is empty")
        setErrorLastname(true)
      }
      if(Message === "") {
        setErrorMessageMessage("error message is empty")
        setErrorMessage(true)
      }

    }
    
    const flexcontent = 'justify-center items-center flex';
    
    return ( 
        <section id="contact" className={`${flexcontent} bg-background  w-full h-full `}>
         <div className={`${flexcontent} w-5/6 h-full mx-auto`}>
           <div className={`${flexcontent}  text-center flex-col w-full h-full`}>
             <h1 className="text-[40px] mb-5 font-semibold text-fontprimary">
               Contact Me
             </h1>
             { Sucess === "" ? undefined : (<Alert  variant="outlined" onClose={() => {setSucess("")}} className="w-full "><p className="text-[#4caf50] ">{Sucess}</p></Alert>)}
             <form  onSubmit={handleSubmit} className="flex justify-start space-y-3 flex-col w-full">

             <p className="text-[#ef4444] text-start">{Firstname === "" ? ErrorFirstnameMessage : undefined}</p>
             <TextField
                
                InputLabelProps={ErrorFirstname === true && Firstname === "" ?  {style: { color: '#ef4444' }}:{style: { color: '#ebfcff' },}}
                InputProps={{style: { color: '#ebfcff', backgroundColor: '#1f3950', },}}
                name="Firstname"
                error={Firstname === "" ? ErrorFirstname : undefined} 
                onChange={(e) => setFirstname(e.target.value)} 
                label="Firstname" 
                variant="filled" />

              <p className="text-[#ef4444] text-start">{Lastname === "" ? ErrorLastnameMessage : undefined}</p>
             <TextField 
                InputLabelProps={ErrorFirstname === true && Lastname === "" ?  {style: { color: '#ef4444' }}:{style: { color: '#ebfcff' },}}
                InputProps={{style: { color: '#ebfcff', backgroundColor: '#1f3950',  },}}
                name="Lastname"
                error={Lastname === "" ? ErrorLastname : undefined} 
                onChange={(e) => setLastname(e.target.value)} 
                label="Lastname" 
                variant="filled" />

             <p className="text-[#ef4444] text-start">{Message === "" ? ErrorMessageMessage : undefined}</p>
             <TextField 
                InputLabelProps={ErrorFirstname === true && Message === "" ?  {style: { color: '#ef4444' }}:{style: { color: '#ebfcff' },}}
                InputProps={{style: { color: '#ebfcff', backgroundColor: '#1f3950', },}}
                name="Message"
                error={Message === "" ? ErrorMessage : undefined} 
                rows={5} onChange={(e) => setMessage(e.target.value)}  
                label="Enter your message" 
                multiline 
                variant="filled" />
             <button type="submit" className= "w-[120px]  h-[40px] rounded text-fontprimary  bg-bgbutton">
                Submit
             </button>
             </form>


          </div>
        </div>
      </section >
     );
}
 
export default Index;