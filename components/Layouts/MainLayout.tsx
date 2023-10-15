import React, { ReactNode } from "react";
import Header from "components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import background from "@/images/background.png";
import Image from "next/image";

const Layout = ({ children }: { children: ReactNode }) => {
  const route = useRouter();

  return (
    <div className="relative w-full">
      <Image
        className="fixed top-0 left-0 w-full h-full object-cover object-center opacity-75"
        src={background}
        alt="background"
      />
      <Header />
      <AnimatePresence mode="wait">
        <motion.section
          key={route.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          {children}
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
