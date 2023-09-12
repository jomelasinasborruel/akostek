import Layout from "@/components/Layouts/MainLayout";
import clsx from "clsx";
import s from "src/styles/MainPages.module.scss";
import { NextPageWithLayout } from "next";

const About: NextPageWithLayout = () => {
  return (
    <div className={clsx(s["section-wrapper"])}>
      <div className="text-[10vw] flex w-fit">About</div>
    </div>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
