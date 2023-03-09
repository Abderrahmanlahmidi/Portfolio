import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  children:string,
  setSelect:(value:string) => void;
}

function Contact({children, setSelect}: Props) {
  return (
    <AnchorLink
      onClick={() => setSelect("contact")}
      href={`#contact`}
    >
      {children}
    </AnchorLink>
  )
}

export default Contact