import "./hero.css";

const Hero = ({ title }) => {
  return (
    <section className="hero__image">
      <div className="hero">
        <h1>{title}</h1>
        <h2 className="hero__h2">SOFTWARE DEVELOPER</h2>
      </div>
    </section>
  );
};

export default Hero;
