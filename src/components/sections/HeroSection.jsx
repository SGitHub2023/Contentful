import HTMLContent from "../helper/HTMLContent";
import Contact from "../routes/Contact";
import { Link } from "react-router-dom";

function HeroSection({ props }) {
  const {
    ctaButtonLabel,
    ctaButtonTarget,
    sectionText1,
    sectionText2,
    sectionTitle,
    sectionImage,
    subTitle,
    title,
  } = props;

  const img = sectionImage.fields.file.url;
  const openContactForm = () => {
    window.open(ctaButtonTarget, "_blank");
  };

  return (
    <section
      className="bg-teal-950 min-h-screen flex items-center px-4"
      style={{
        backgroundImage: `url("src/components/images/HeroSwoosh.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start justify-center md:justify-center">
            <style>
              {`
                h1.title-font {
                  font-family: 'Train One', cursive;
                }
              `}
            </style>
            <h1 className="text-7xl font-italic leading-tight mb-4 title-font text-white mx-8">
              <HTMLContent content={title} className="title-font" />
            </h1>
            <h2 className="text-6xl font-extrabold mb-10 text-white mx-8">
              {subTitle}
            </h2>
            <p className="text-xl font-italic mb-20 text-white mx-8">
              {sectionText1}
            </p>
            <Link
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full justify-center mx-8"
              role="button"
              to="/contact"
            >
              {ctaButtonLabel}
            </Link>
          </div>

          <div className="">
            <div className="relative md:-translate-y-28">
              <div className="aspect-square rounded-full overflow-hidden max-w-[400px]">
                <img
                  className="w-full h-full object-cover object-top"
                  src={img}
                  alt="John Doe"
                />
              </div>
              <div className="bg-white rounded-lg p-4 text-black text-center absolute bottom-0 left-0 z-10">
                <h3 className="text-xl font-bold mb-2">
                  Fullstack <br />
                  Web & App <br />
                  Developer
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
