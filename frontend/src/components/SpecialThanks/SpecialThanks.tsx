import engineers from './Engineers.json'

export default function SpecialThanks() {
    return (
        <>
            <h2>Special Thanks</h2>
            <p><strong>Engineers</strong></p>
            {engineers.map((engineer, i) => (
                <div key={i}>{engineer.firstName} {engineer.lastName}</div>
            ))}
            <p>And <strong>PMs</strong>, <strong>Designers</strong>, and everyone else's kindness, openness, laughter, and welcoming environment!</p>
        </>
    )
}
