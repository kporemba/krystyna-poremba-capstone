import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="about__hero-container">
        <img
          className="about__header"
          src="http://localhost:8080/images/about-header.jpeg"
          alt="Project in progress"
        />
      </div>
      <div className="about__container">
        <div className="about__group">
          <div className="about__image-container">
            <img
              className="about__image"
              src="http://localhost:8080/images/about1.jpeg"
              alt="blue hat"
            />
          </div>
          <div className="about__quote-container">
            <h3 className="about__quote">
              Welcome to KP Kustoms, where every stitch tells a story.
              Handcrafted with care and creativity, each item in our collection
              is a testament to the artistry of crochet.
            </h3>
          </div>
        </div>
        <div className="about__group--mobile">
          <div className="about__image-container">
            <img
              className="about__image"
              src="http://localhost:8080/images/about2.jpeg"
              alt="granny square bucket hats"
            />
          </div>
          <div className="about__quote-container">
            <h3 className="about__quote">
              From whimsical costumes to elegant accessories and cozy clothing,
              we specialize in bringing your imagination to life.
            </h3>
          </div>
        </div>
        <div className="about__group about__group--tablet">
          <div className="about__quote-container">
            <h3 className="about__quote">
              From whimsical costumes to elegant accessories and cozy clothing,
              we specialize in bringing your imagination to life.
            </h3>
          </div>
          <div className="about__image-container">
            <img
              className="about__image"
              src="http://localhost:8080/images/about2.jpeg"
              alt="granny square bucket hats"
            />
          </div>
        </div>
        <div className="about__group">
          <div className="about__image-container">
            <img
              className="about__image"
              src="http://localhost:8080/images/about3.jpeg"
              alt="baby blanket in progress"
            />
          </div>
          <div className="about__quote-container">
            <h3 className="about__quote">
              Join us on our journey as we expand our small business online,
              bringing custom creations from our local community to yours,
              wherever you may be.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
