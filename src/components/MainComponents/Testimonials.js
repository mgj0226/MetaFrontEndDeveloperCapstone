import yellowStar from '../../images/yellowStar.svg'

const Testimonials = () => {
    return(
        <section className="testimonials">
            <title>Testimonials</title>
            <div className="testimonialsCards">
                <div className="testimonialsCard">
                    <div className="testimonialsCardLeft">
                        <h3 className="testimonialsCardRate">
                            <p>Rating</p>
                            <img src={yellowStar} alt="yellow star" />
                            <img src={yellowStar} alt="yellow star" />
                            <img src={yellowStar} alt="yellow star" />
                            <img src={yellowStar} alt="yellow star" />
                            <img src={yellowStar} alt="yellow star" />
                        </h3>
                        <img src='' alt='User' className='testimonialsCardImg'/>
                        <h3 className="testimonialsCardName">John Doe</h3>
                        <description className="testimonialsCardDescription">John Doe is a thirty years old baker.</description>
                    </div>
                    <div className="testimonialsCardRight">
                        <article className="testimonialsCardArticle">I love having dinner at Little Lemon. The dishes are amazing.</article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials