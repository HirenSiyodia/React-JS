import React from "react";
import Skillcard from "./Skillcard";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
              Here are some of Technologies I'm proficient in.
            </p>
          </div>
        </div>
        <div className="mx-auto grid mt-10 max-w-5xl items-start gap-8 sm:grid-cols-3 md:gap-12 lg:grid-cols-5">
          <Skillcard
            imgUrl="https://tse3.mm.bing.net/th/id/OIP.tHYR-6oYpduV1jPgI4QPVgHaHa?pid=Api&P=0&h=220"
            title="React JS"
          />

          <Skillcard
            imgUrl="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png"
            title="JavaScript"
          />

          <Skillcard
            imgUrl="https://tse1.mm.bing.net/th/id/OIP.c35sZJtMQ178BexqabknQgAAAA?pid=Api&P=0&h=220"
            title="MongoDB"
          />

          <Skillcard
            imgUrl="https://logospng.org/download/tailwind-css/tailwind-css-1024.png"
            title="Tailwind CSS"
          />

          <Skillcard
            imgUrl="https://www.nicepng.com/png/full/274-2741839_jquery-jquery-logo-transparent-background.png"
            title="Jquery"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
