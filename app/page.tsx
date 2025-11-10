"use client";
import React from "react";
import CardCarousel from "../components/ui/card-carousel";
// import TextScroll from "../components/ui/text-scroll";
// import FlipLink from '../components/ui/text-effect-flipper'
// import WrapButton from "@/components/ui/wrap-button"

// import{Banana,Twitter,Instagram,Github} from "lucide-react";
// import ShareButton from "@/components/ui/share-button"
const page = () => {
  const images = [
    {
      src: "/img1.jpg",
      alt: "Image 1",
    },
    {
      src: "/img2.jpg",
      alt: "Image 2",
    },
    {
      src: "/img3.jpg",
      alt: "Image 3",
    },
  ];
  return (
    <div className=" ">
      <CardCarousel
        autoplayDelay={2000}
        showPagination={false}
        showNavigation={true}
        images={images}
      />
      {/* <div className="h-screen"></div>
      <div className="h-screen border-t-2 ">
        <TextScroll
          className="text-4xl"
          default_velocity={-5}
          text="Wlecome to New york city!!"
        ></TextScroll>
      </div>
      <div className="h-screen border-t-2"></div> */}

      {/* <FlipLink href="https://x.com/guri_who">Behance</FlipLink>
<FlipLink href="https://github.com/Pranjal-ux">GITHUB</FlipLink>
<FlipLink href="https://x.com/guri_who">Twitter</FlipLink>
<FlipLink href="https://x.com/guri_who">Instagram</FlipLink>
<FlipLink href="https://x.com/guri_who">Facebook</FlipLink> */}

      {/* /* <h1 className="text-white">Page</h1>
    <WrapButton>
       
      Get Started
    </WrapButton>
    <ShareButton links={[{icon:Twitter},{icon:Banana},{icon:Instagram},{icon:Github}]}>Share</ShareButton> */}
    </div>
  );
};

export default page;
