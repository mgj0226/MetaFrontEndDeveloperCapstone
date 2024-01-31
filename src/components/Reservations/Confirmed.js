import confirmStar from '../../images/confirmStar.svg'

export default function Confirmed() {
    return (
        <>
            <img src={confirmStar} alt="star" className='confirmStar' />
            <h2>Confirmed!</h2>
            <p>Thank you for your reservation!</p>
        </>
    )
}