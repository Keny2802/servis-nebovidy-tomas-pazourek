import {
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const Page = () => {
  return (
      <Fragment>
          <Header id="navigace" />
          <Hero id="uvod" />
          <Pricing id="cenik" />
          <Contact id="kontakt" />
          <Footer id="footer" />
      </Fragment>
  );
};

export default Page;