import Project from "../components/Project";
import MyServices from "../components/MyServices";
import MyProcesses from "@/components/MyProcesses";
import NewHero from "@/components/NewHero";

export default function Home() {
  return (
    <main className="bg-theme_white-900">
      <NewHero />
      <MyServices />
      <MyProcesses />
      <div className="bg-theme_black-900">
        <h2 className="uppercase text-theme_white-900 mx-6 md:content-container pt-24 text-xl tracking-widest font-extralight">
          Latest work.
        </h2>
        <Project />
      </div>
    </main>
  );
}
