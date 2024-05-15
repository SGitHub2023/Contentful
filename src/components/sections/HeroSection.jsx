import HTMLContent from "../helper/HTMLContent";
import Contact from "../routes/Contact";

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
      className="bg-teal-950 min-h-screen flex items-center"
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

            <button
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded justify-center mx-8"
              onClick={openContactForm}
            >
              {ctaButtonLabel}
            </button>
          </div>
          <div className="relative">
            <img
              className="w-5/6 h-5/6 rounded-full overflow-hidden"
              src={img}
              alt="John Doe"
            />
            <div className="absolute left-[-50px] top-2/4 transform translateX(-50px) -translate-y-1/2">
              <div className="bg-white rounded-lg p-4 text-black text-center">
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
