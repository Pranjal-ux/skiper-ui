"use client"
import React from 'react'
 import FlipLink from '../components/ui/text-effect-flipper'
// import WrapButton from "@/components/ui/wrap-button"

// import{Banana,Twitter,Instagram,Github} from "lucide-react";
// import ShareButton from "@/components/ui/share-button"
const page = () => {
  return (
   <div className="flex justify-center items-center flex-col">







<FlipLink href="https://x.com/guri_who">Behance</FlipLink>
<FlipLink href="https://github.com/Pranjal-ux">GITHUB</FlipLink>
<FlipLink href="https://x.com/guri_who">Twitter</FlipLink>
<FlipLink href="https://x.com/guri_who">Instagram</FlipLink>
<FlipLink href="https://x.com/guri_who">Facebook</FlipLink>










  {/* /* <h1 className="text-white">Page</h1>
    <WrapButton>
       
      Get Started
    </WrapButton>
    <ShareButton links={[{icon:Twitter},{icon:Banana},{icon:Instagram},{icon:Github}]}>Share</ShareButton> */ }
   </div>


      
    


 
  )
}

export default page