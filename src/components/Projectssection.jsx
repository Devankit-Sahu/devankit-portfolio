import React from 'react'

const Projectssection = () => {
  return (
    <div className="h-screen relative bg-black text-white" id="projects">
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-[.7]"
        style={{
          backgroundImage: "url('/background-overlay.png')",
        }}
      ></div> */}
      <div className="container mx-auto px-10 h-full 2xl:px-40">
        <div className="flex justify-center">
          <h1 className="text-5xl pt-5 capitalize heading relative">
            Projects I
            <span className="text-6xl text-[blue] font-[800]"> Have</span>
          </h1>
        </div>
        <div className="card-wrapper">
          <div className="card grid">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectssection