import confirmStar from '../../images/confirmStar.svg'

export default function Confirmed() {
    return (
        <section className='confirmed'>
            <img src={confirmStar} alt="star" className='confirmStar' />
            <h2 className='confirmedTitle'>Confirmed!</h2>
            <p className='confirmedText'>Thank you for your reservation!</p>
        </section>
    )
}