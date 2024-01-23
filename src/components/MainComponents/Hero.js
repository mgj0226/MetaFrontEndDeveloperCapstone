import restaurantFood from '../../images/restaurantfood.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <article className='heroText'>
                <h1 className="heroTitle">Little Lemon</h1>
                <h2 className="heroSubtitle">Chicago</h2>
                <p className="heroArticle">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a href='/Reservations'>
                    <button className="heroButton">Reserve a Table</button>
                </a>
            </article>
            <img src={restaurantFood} alt="food" className="heroImg" />
        </section>
    );
};

export default Hero