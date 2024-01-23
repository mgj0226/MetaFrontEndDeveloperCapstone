import { useEffect, useState } from 'react';
import yellowStar from '../../images/yellowStar.svg'

const Testimonials = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=4")
        .then((response) => response.json())
        .then((data) => {
            if (users) {const newUsers = data.results.map(user => ({
                    Name: user.name.first + ' ' + user.name.last,
                    image: user.picture.large,
                    age: user.dob.age,
                }));
                setUsers(newUsers);
                setIsLoading(false);
            }
        })
    };
    useEffect(() => {
        fetchData();
    },[]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return(
        <section className="testimonials">
            <h1 className='testimonialsTitle'>Customers say:</h1>
            <div className="testimonialsCards">
                <div className="testimonialsCard">
                    <div className="testimonialsCardLeft">
                        <h4 className="testimonialsCardRate">
                            <p>Rating</p>
                            <img src={yellowStar} alt="yellow star" />
                            <img src={yellowStar} alt="yellow star" />
                            <img src={yellowStar} alt="yellow star" />
                            <img src={yellowStar} alt="yellow star" />
                            <img src={yellowStar} alt="yellow star" />
                        </h4>
                        <img src={users[0].image} alt='User' className='testimonialsCardImg'/>
                        <h3 className="testimonialsCardName">{users[0].Name}</h3>
                        <p className="testimonialsCardDescription">{users[0].Name}is a {users[0].age} years old marketing manager.</p>
                    </div>
                    <div className="testimonialsCardRight">
                        <p className="testimonialsCardArticle">I love having dinner at Little Lemon. The dishes are amazing.</p>
                    </div>
                </div>
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
                        <img src={users[1].image} alt='User' className='testimonialsCardImg'/>
                        <h3 className="testimonialsCardName">{users[1].Name}</h3>
                        <p className="testimonialsCardDescription">{users[1].Name}is a {users[1].age} years old marketing manager.</p>
                    </div>
                    <div className="testimonialsCardRight">
                        <p className="testimonialsCardArticle">I love having dinner at Little Lemon. The dishes are amazing.</p>
                    </div>
                </div>
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
                        <img src={users[2].image} alt='User' className='testimonialsCardImg'/>
                        <h3 className="testimonialsCardName">{users[2].Name}</h3>
                        <p className="testimonialsCardDescription">{users[2].Name}is a {users[2].age} years old marketing manager.</p>
                    </div>
                    <div className="testimonialsCardRight">
                        <p className="testimonialsCardArticle">I love having dinner at Little Lemon. The dishes are amazing.</p>
                    </div>
                </div>
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
                        <img src={users[3].image} alt='User' className='testimonialsCardImg'/>
                        <h3 className="testimonialsCardName">{users[3].Name}</h3>
                        <p className="testimonialsCardDescription">{users[3].Name}is a {users[3].age} years old marketing manager.</p>
                    </div>
                    <div className="testimonialsCardRight">
                        <p className="testimonialsCardArticle">I love having dinner at Little Lemon. The dishes are amazing.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials