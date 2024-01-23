import Owners from "../../images/Mario and Adrian b.jpg"

const About = () => {
    return (
        <section className="about">
            <article className="aboutArticle">
                <h1 className="aboutTitle">Little Lemon</h1>
                <h3 className="aboutSubtitle">Chicago</h3>
                <p className="aboutText">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
            </article>
            <div className="aboutImgBlock"><img src={Owners} alt="Mario and Adrian" className="aboutImg"/></div>
        </section>
    );
};

export default About