"use client";
import React from "react";
import SkiperCard from "../components/ui/skiper-card";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";
import img6 from "../public/img6.jpg";
import { cn } from "@/lib/utils";

// import CardCarousel from "../components/ui/card-carousel";
// import TextScroll from "../components/ui/text-scroll";
// import FlipLink from '../components/ui/text-effect-flipper'
// import WrapButton from "@/components/ui/wrap-button"

// import{Banana,Twitter,Instagram,Github} from "lucide-react";
// import ShareButton from "@/components/ui/share-button"
const page = () => {
  // const images = [
  //   {
  //     src: "/img1.jpg",
  //     alt: "Image 1",
  //   },
  //   {
  //     src: "/img2.jpg",
  //     alt: "Image 2",
  //   },
  //   {
  //     src: "/img3.jpg",
  //     alt: "Image 3",
  //   },
  // ];
  return (
    <div className=" ">
      <SkiperCard
        title="Learing the new Ui library"
        description="Lage raho ache se"
        step2img1Class={cn(
          "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
          "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
          "md:group-hover:translate-y-2"
        )}
        step2img2Class={cn(
          "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
          "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
          "md:group-hover:-translate-y-6"
        )}
        step3imgClass={cn(
          "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
          "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
        )}
        image={{
          step1dark1: img1,
          step1dark2: img2,
          step1light1: img3,
          step1light2: img4,
          step2dark1: img5,
          step2dark2: img6,
          step2light1: img2,
          step2light2: img1,
          step3dark: img4,
          step3light: img5,
          step4light: img3,
          alt: "Image is here",
        }}
      />

      {/* <CardCarousel
        autoplayDelay={2000}
        showPagination={false}
        showNavigation={true}
        images={images}
      /> */}
      {/* <div className="h-screen"></div>
      <div className="h-screen border-t-2 ">
        <TextScroll
          className="text-4xl"
          default_velocity={-5}
    ard1      text="Wlecome to New york city!!"
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
