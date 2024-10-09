import React from "react";
import Wrapper from "./Wrapper";
import { services } from "../constants/constants";

const Services = () => {
  return (
    <section id="services" className="min-h-screen">
      <Wrapper>
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-center capitalize mb-10">
          what i <span className="text-[#c770f0]">offer</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="neon-border rounded-[10px] p-10 text-center cursor-pointer"
            >
              <div className="service-icon flex items-center justify-center text-3xl mb-3 text-gray-500">
                <service.icon />
              </div>
              <h3 className="text-xl font-bold text-[#c770f0] mb-2">
                {service.title}
              </h3>
              <p className="text-[#b5b5b5]">{service.description}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Services;
