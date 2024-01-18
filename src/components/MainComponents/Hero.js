import restaurantFood from '../../images/restaurantfood.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <text className='heroText'>
                <h1 className="heroTitle">Little Lemon</h1>
                <h2 className="heroSubtitle">Chicago</h2>
                <article className="heroArticle">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</article>
                <button className="heroButton">Reserve a Table</button>
            </text>
            <img src={restaurantFood} alt="food" className="heroImg" />
        </section>
    );
};

export default Hero