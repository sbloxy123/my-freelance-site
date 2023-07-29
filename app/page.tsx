import Hero from "../components/Hero";
import MyIntro from "../components/MyIntro";
import Project from "../components/Project";
import MyServices from "../components/MyServices";
import MyProcesses from "@/components/MyProcesses";

export default function Home() {
  return (
    <main>
      <Hero />
      <MyIntro />
      <div className="gatsby-info">
        {/* <GatsbyInfo /> */}
        <div className="container">
          {/* <ClickHere url="/information/" content="learn more" /> */}
        </div>
      </div>
      <div className="services">
        <MyServices />
        <div className="container">
          {/* <ClickHere url="/services/" content="learn more" /> */}
        </div>
        <MyProcesses />
      </div>
      <div className="bg-theme_black-900">
        <h2 className="uppercase text-theme_white-900 mx-6 md:content-container pt-24 text-xl tracking-widest font-extralight">
          Latest work.
        </h2>
        <Project />
      </div>
      <div className="container">
        {/* <ClickHere url="/my-work/" content="learn more" /> */}
      </div>
      {/* <ContactForm /> */}
    </main>
  );
}
