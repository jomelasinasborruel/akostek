import { NextPageWithLayout } from "next";
import Layout from "components/Layouts/MainLayout";
import s from "src/styles/MainPages.module.scss";
import clsx from "clsx";

const Partners: NextPageWithLayout = () => {
  return (
    <div className={clsx(s["section-wrapper"])}>
      <div className="text-[10vw] flex w-fit">Partners</div>
    </div>
  );
};

Partners.getLayout = (page) => <Layout>{page}</Layout>;
export default Partners;
