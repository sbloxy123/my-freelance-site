import Hero from "../components/Hero";
import Project from "../components/Project";
import MyServices from "../components/MyServices";
import MyProcesses from "@/components/MyProcesses";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloxywebservices.co.uk/",
  url: "https://bloxywebservices.co.uk/",
  name: "Stuart Bloxham - Web Designer & Developer",
  logo: {
    "@type": "ImageObject",
    url: "https://www.bloxywebservices.co.uk/images/icons/logo.svg",
    width: 400,
    height: 400,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hare Street",
    addressLocality: "Buntingford",
    addressRegion: "Hertfordshire",
    addressCountry: "United Kingdom",
    postalCode: "SG9 0EA",
  },
  telephone: "07806615231",
  email: "stuart@bloxywebservices.co.uk",
  image: [
    "https://www.bloxywebservices.co.uk/opengraph-image.png?1581b81fa00074ce",
    "/screenshot.png",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      {
        "@type": "DayOfWeek",
        name: "Monday",
      },
      {
        "@type": "DayOfWeek",
        name: "Tuesday",
      },
      {
        "@type": "DayOfWeek",
        name: "Wednesday",
      },
      {
        "@type": "DayOfWeek",
        name: "Thursday",
      },
      {
        "@type": "DayOfWeek",
        name: "Friday",
      },
    ],
    opens: "08:00",
    closes: "17:30",
  },
};

export default function Home() {
  return (
    <main className="bg-theme_white-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      {/* <MyIntro /> */}
      <MyServices />
      <MyProcesses />
      <div className="bg-theme_black-900">
        <h2 className="uppercase text-theme_white-900 mx-6 md:content-container pt-24 text-xl tracking-widest font-extralight">
          Latest work.
        </h2>
        <Project />
      </div>
      {/* <ContactForm /> */}
    </main>
  );
}
