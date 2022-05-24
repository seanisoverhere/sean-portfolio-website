import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <div className="w-1/2 lg:block hidden">
          {/* Hero image here */}
          <img src="/hero.jpg" />
        </div>
        <div className="text-center w-full">
          <img src="/profile_male.png" className="w-40 mx-auto" />
          <div className="py-4 text-6xl font-semibold">Sean Choon</div>
          <div className="pb-4 text-2xl">Frontend Developer from Singapore</div>
          <div className="text-lg text-blue-500">
            {/* Place your links here */}
            <a
              href="https://www.linkedin.com/in/sean-choon"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <span className="text-black dark:text-white"> | </span>
            <a
              href="https://www.github.com/seanisoverhere"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            {/* End of Links */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
