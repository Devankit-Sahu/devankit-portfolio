import React from "react";
import { projectList } from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Projectssection = () => {
  return (
    <div
      className="min-h-screen w-full dark:bg-[#221652] dark:text-white pb-2"
      id="projects"
    >
      <div className="container mx-auto px-10 2xl:px-40 pt-10 pb-5">
        <h1 className="text-[1.5rem] font-semibold text-center capitalize">
          my work
        </h1>
      </div>
      <div className="container mx-auto px-10 h-full 2xl:px-40">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper bg-[#4598e648] md:h-[70vh] mb-11"
        >
          {projectList.map((project) => (
            <SwiperSlide key={project.name}>
              <div className="h-full flex flex-col md:flex-row">
                <div className="h-[40vh] md:h-full md:flex-1">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex md:flex-1 flex-col gap-3 md:gap-0 justify-evenly px-10 py-4 md:py-0">
                  <h1 className="text-xl lg:text-5xl font-[400] lg:font-[600] mb-5">
                    {project.name}
                  </h1>
                  <p className="text-xs font-[300] mb-5">{project.desc}</p>
                  <div>
                    <h2 className="text-[1rem] lg:text-xl capitalize font-bold mb-5">
                      Technologies used :
                    </h2>
                    <ul className="flex gap-3">
                      {project.tech.map((t) => (
                        <li key={t.name}>
                          <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]">
                            <img
                              src={t.image}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h2 className="text-[10px] lg:text-[15px]">
                            {t.name}
                          </h2>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    target="_blank"
                    href={project.link}
                    className="border-[1px] border-white rounded-[10px] cursor-pointer mx-auto p-2"
                  >
                    <img
                      src="/icons8-github.svg"
                      alt=""
                      className="w-[3rem] object-cover"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projectssection;
