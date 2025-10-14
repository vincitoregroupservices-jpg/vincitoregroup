import React from "react";

const Hero = ({title, description, image}) => {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[80vh] pt-14 flex items-center justify-center text-center bg-cover bg-center mb-6 gap-14"
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* Overlay */}
      <div className="w-full absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 px-5 max-w-3xl flex flex-col gap-6 w-[80%]">
        <div>
          {title.map((text, index) => (
            <h1 key={index} className="text-5xl md:text-7xl font-light text-gold">
              {text}
            </h1>
          ))}
        </div>

        {/* Subtitle */}
        <p className="text-md md:text-xl text-white max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
