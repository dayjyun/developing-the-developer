import engineers from './Engineers.json'
import "./SpecialThanks.scss"

export default function SpecialThanks() {
    return (
        <div className='special-thanks'>
            <h2>Special Thanks</h2>
            <p><strong>Engineers</strong></p>
            {engineers.map((engineer, i) => (
                <div key={i}>{engineer.firstName} {engineer.lastName}</div>
            ))}
            <p>And <strong>PMs</strong>, <strong>Designers</strong>, and everyone else's kindness, openness, laughter, and welcoming environment!</p>
        </div>
    )
}
