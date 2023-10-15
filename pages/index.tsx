import { GetServerSideProps, GetStaticProps, NextPageWithLayout } from "next";
import Layout from "components/Layouts/MainLayout";
import s from "src/styles/MainPages.module.scss";
import image1 from "@/images/introduction/slide1.jpg";
import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper/modules";

export const getServerSideProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();

  const cloudinary = require("cloudinary");

  // Return "https" URLs by setting secure: true
  cloudinary.config({
    secure: true,
  });

  const result = await cloudinary.v2.api.resources({
    type: "upload",
    prefix: "Akostek/banner/banner-item",
  });

  return { props: { result: JSON.stringify(result) } };
};

interface ImageMeta {
  asset_id: string;
  secure_url: string;
}

const Home: NextPageWithLayout = ({ result }: any) => {
  const bannerImages: ImageMeta[] = JSON.parse(result).resources;
  // const [bannerImages, setBannerImages] = React.useState<Array<ImageMeta>>([]);

  // const fetchImages = async () => {
  //   const response = await fetch("api/cloudinary");
  //   const res = await response.json();
  //   const filterRes = res["message" as any];
  //   if (filterRes) {
  //     setBannerImages(
  //       JSON.parse(filterRes).resources.map((item: ImageMeta) => {
  //         return { asset_id: item.asset_id, secure_url: item.secure_url };
  //       })
  //     );
  //   }
  // };

  // React.useEffect(() => {
  //   fetchImages();
  // }, []);

  return (
    <>
      <div
        className={clsx(s["section-wrapper"], "bg-[#292929] !max-w-none !pt-0")}
      >
        {bannerImages.length !== 0 && (
          <Swiper
            loop
            autoplay
            centeredSlides
            speed={2000}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="max-w-[70rem] flex justify-cneter"
          >
            {bannerImages.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={1110}
                  height={519}
                  alt={src.asset_id}
                  className="object-cover h-full w-full"
                  src={src.secure_url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div
        className={clsx(
          s["section-wrapper"],
          "lg:justify-between flex lg:flex-row flex-col justify-center lg:items-start items-center"
        )}
      >
        <div className="max-w-[700px] lg:max-w-[31.25rem] w-full lg:mr-10 mb-10 lg:mb-0">
          <Image
            src={image1}
            alt={"image-1"}
            className="w-full h-auto object-cover object-center"
          />
        </div>
        <div className="max-w-[700px] lg:max-w-[34.375rem] w-full flex flex-col ">
          <h1 className={clsx(s["heading-1"], "text-[#35a576]")}>Our WEIGH </h1>

          <h1 className={clsx(s["heading-5"], "mb-5")}>
            of improving industrial processes
          </h1>
          <p className={clsx(s["paragraph-1"])}>
            AKOSTEK INC. is a trading corporation specializing in weighing
            systems, industrial automation and Integration. It aims to give the
            Philippine&apos;s industry an accessible, cost-effective and
            innovative solution that builds, not only advance science and
            technology, but also proper business ethics and leadership. It
            focuses on sourcing, marketing and distribution of high quality
            branded products along with dependable technical services.{" "}
          </p>
          <button
            className={clsx(
              s["button-text"],
              "px-5 py-2 bg-[#8a0000] text-white rounded-md self-end mt-5 hover:bg-[rgb(178,72,72)] transition-colors duration-200"
            )}
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
