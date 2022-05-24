import React from "react";
import Layout from "../components/Layout";

const Work = () => {
  return (
    <Layout>
      <div className="text-4xl text-center font-semibold pb-24">My Work</div>
      {/* Grid layout to set your projects */}
      <div className="grid gap-8 grid-cols-3 grid-rows-3">
        {/* Start */}
        <div>
          <a
            href="https://heartcode.scis.smu.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover w-full h-80 mb-6 rounded"
              src="/heartcode.png"
              alt="Project HeartCode"
            />
          </a>
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Project HeartCode
          </p>
          <p>Project HeartCode is a community service programm in SMU</p>
        </div>
        {/* End */}
        {/* Start */}
        <div>
          <a
            href="https://heartcode.scis.smu.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover w-full h-80 mb-6 rounded"
              src="/placeholder.jpeg"
              alt="Project HeartCode"
            />
          </a>
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Project
          </p>
          <p>Sample Description of Project</p>
        </div>
        {/* End */}
        {/* Start */}
        <div>
          <a
            href="https://heartcode.scis.smu.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover w-full h-80 mb-6 rounded"
              src="/placeholder.jpeg"
              alt="Project HeartCode"
            />
          </a>
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Project
          </p>
          <p>Sample Description of Project</p>
        </div>
        {/* End */}
        {/* Start */}
        <div>
          <a
            href="https://heartcode.scis.smu.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover w-full h-80 mb-6 rounded"
              src="/placeholder.jpeg"
              alt="Project HeartCode"
            />
          </a>
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Project
          </p>
          <p>Sample Description of Project</p>
        </div>
        {/* End */}
      </div>
    </Layout>
  );
};

export default Work;
