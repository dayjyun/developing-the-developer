import engineers from './Engineers.json'

export default function SpecialThanks() {
    return (
        <>
            <h2>Special Thanks</h2>
            {engineers.map((engineer, i) => (
                <div key={i}>{engineer.firstName} {engineer.lastName}</div>
            ))}
            <p>And for everyone's kindness, openness, laughter, and welcoming environment</p>
        </>
    )
}
