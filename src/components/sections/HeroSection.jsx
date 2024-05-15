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
    window.open(ctaButtonTarget, "/contact");
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start justify-center md:justify-start">
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              <HTMLContent content={title} />
            </h1>
            <h2 className="text-xl font-extrabold mb-4">{subTitle}</h2>
            <p className="text-xl font-semibold mb-4">{sectionText1}</p>
            <p className="text-xl font-semibold">{sectionText2}</p>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-52 h-52 rounded-full overflow-hidden"
              src={img}
              alt="John Doe"
            />
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={openContactForm}
        >
          {ctaButtonLabel}
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
