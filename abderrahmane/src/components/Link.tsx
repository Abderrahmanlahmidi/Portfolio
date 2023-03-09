import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page:string,
  Select:string,
  setSelect:(value:string) => void;
}


function Link({page, setSelect, Select}: Props) {
  const lowercase = page.toLowerCase().replace(/ /g, "")
  return (
    <AnchorLink 
     className={`${Select === lowercase ? "text-bgbutton" : 'text-fontprimary'} transition delay-150 hover:text-bgbutton`}
     href={`#${lowercase}`}
     onClick={() => setSelect(lowercase)}
    >
       {page}
    </AnchorLink>
  )
}

export default Link