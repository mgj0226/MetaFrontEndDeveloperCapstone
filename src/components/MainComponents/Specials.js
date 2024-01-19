import bikeIcon from '../../images/directions_bike.svg';
import salad from '../../images/greek salad.jpg';
import lemonDessert from '../../images/lemon dessert.jpg';
import bruchetta from '../../images/bruchetta.svg';

const Specials = () => {
    return (
        <section className="special">
            <div className="specialHead">
                <h1>This weeks specials!</h1>
                <a href="/Menu">
                    <button className="specialButton">Online Menu</button>
                </a>
            </div>
            <div className="specialCards">
                <div className="specialCard">
                    <img src={salad} alt='salad' className='specialCardImg'/>
                    <div className='specialCardHead'>
                        <h3 className="specialCardTitle">Greek salad</h3>
                        <h4 className="specialCardPrice">$12.99</h4>
                    </div>
                    <p className="specialCardDescription">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy galic and rosemary croutons.
                    </p>
                    <button className="specialCardButton">
                        Order a delivery
                        <img src={bikeIcon} alt='button' className='specialCardButtonIcon'/>
                    </button>
                </div>
                <div className="specialCard">
                    <img src={bruchetta} alt='Bruchetta' className='specialCardImg'/>
                    <div className='specialCardHead'>
                        <h3 className="specialCardTitle">Bruchetta</h3>
                        <h4 className="specialCardPrice">$5.99</h4>
                    </div>
                    <p className="specialCardDescription">
                        Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                    </p>
                    <button className="specialCardButton">
                        Order a delivery
                        <img src={bikeIcon} alt='button' className='specialCardButtonIcon'/>
                    </button>
                </div>
                <div className="specialCard">
                    <img src={lemonDessert} alt='Lemon Dessert' className='specialCardImg'/>
                    <div className='specialCardHead'>
                        <h3 className="specialCardTitle">Lemon Dessert</h3>
                        <h4 className="specialCardPrice">$5.00</h4>
                    </div>
                    <p className="specialCardDescription">
                        This comes straight from grandma's recipe book, every last ingredien has been sourced and is as authentic as can be imagined.
                    </p>
                    <button className="specialCardButton">
                        Order a delivery
                        <img src={bikeIcon} alt='button' className='specialCardButtonIcon'/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Specials