import developer from "../../assets/developer-dark.svg" 
import Cvpdf from "../../assets/cv.pdf"

const Index = () => {
    const flexcontent = "md:flex flex flex-col justify-center items-center"
    const buttoncv = "w-[120px] text-fontprimary bg-bgbutton mt-[30px] h-[40px] rounded text-bg background"
    const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch(Cvpdf).then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = Cvpdf;
              alink.click();
          })
      })
  }
    return ( 
       <header id="home" className={`${flexcontent} w-full mt-[80px]  py-[40px]  bg-background`}>
             <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
                <div className="w-full flex flex-col">
                  <h1 className="font-bold text-fontprimary text-[40px]">Abderrahmane Lahmidi</h1>
                  <h2 className="font-bold text-fontsecondary text-[30px]">Front-End Developer</h2>
                  <p className="text-fontsecondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aspernatur nulla necessitatibus nisi voluptas recusandae perspiciatis ipsa voluptate tempora commodi?</p>
                  <button onClick={onButtonClick} className={buttoncv}>Download cv</button>
                </div>
                <div className="w-full">
                   <img src={developer}  alt="developer"/>
                </div>
             </div>
       </header>
     );
}
 
export default Index;
