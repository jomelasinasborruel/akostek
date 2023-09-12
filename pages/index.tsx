import { NextPageWithLayout } from "next";
import Layout from "components/Layouts/MainLayout";
import s from "src/styles/MainPages.module.scss";
import image1 from "@/images/introduction/slide1.jpg";
import clsx from "clsx";
import Image from "next/image";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="w-full"></div>
      <div className={clsx(s["section-wrapper"])}>
        <div className="flex justify-center">
          <div className="max-w-[31.25rem] w-full mr-10">
            <Image
              src={image1}
              alt={"image-1"}
              className="w-full h-auto object-cover object-center"
            />
          </div>
          <div className="max-w-[34.375rem] w-full flex flex-col  p-5 ">
            <h1 className={clsx(s["heading-1"], "text-[#35a576]")}>
              Our WEIGH{" "}
            </h1>

            <h1 className={clsx(s["heading-5"], "mb-5")}>
              of improving industrial processes
            </h1>
            <p className={clsx(s["paragraph-1"])}>
              AKOSTEK INC. is a trading corporation specializing in weighing
              systems, industrial automation and Integration. It aims to give
              the Philippine&apos;s industry an accessible, cost-effective and
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
      </div>
    </>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
