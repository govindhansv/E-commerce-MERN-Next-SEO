// pages/index.js
import Head from 'next/head';
import Layout from '../components/Home/Layout';
// import ImageSlider from '@/components/Others/ImageSlider';
import FlashSaleBanner from "@/components/Others/FlashSaleBanner";
import HelahPromis from "@/components/Others/HelahPromis";
// import BestSellers from "@/components/Others/BestSellers";
// import ShopCatogories from "@/components/Others/ShopCatogories";
// import ImageSliderMobile from "@/components/Others/ImageSliderMobile";


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Ecommerce App - Home</title>
        <meta name="description" content="Welcome to My Ecommerce store" />
      </Head>
      <div>
      <div className="w-full hidden md:flex h-[640px] bg-[#FFEFF1] md:py-11 md:px-20 justify-center">
        {/* <ImageSlider /> */}
      </div>
      <div className="bg-[#FFEFF1]">
        <div className="w-full flex md:hidden h-[250px] bg-[#FFEFF1] justify-center">
          <div className=" w-full flex md:hidden h-[250px] bg-[#FFEFF1] justify-center ">
            {/* <ImageSliderMobile /> */}
          </div>
        </div>

        <div className="mt-6">
          <FlashSaleBanner />
        </div>
      </div>
      <div className="mt-8 lg:mx-16">
        {/* <ShopCatogories /> */}
      </div>
      {/* <div className="mt-8">
        <RecentlyViewed />
      </div> */}
      <div className="mt-8 md:mx-8 ">
        {/* <BestSellers /> */}
      </div>
      <div className="sm:mt-24">
        <HelahPromis />
      </div>
    </div>
    </Layout>
  );
}
