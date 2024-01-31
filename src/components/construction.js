import constructionSign from '../images/constructionSign.svg'

export default function Construction() {
    return (
        <secton className="construction">
            <img src={constructionSign} alt="construction" className='constructionSign' />
            <h2 className='constructionTitle'>Under construction!</h2>
            <p className='constructionText'>Sorry, this page is under construction!</p>
        </secton>
    )
}