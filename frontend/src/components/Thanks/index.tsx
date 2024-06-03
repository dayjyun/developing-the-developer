import engineers from './Engineers.json'

export default function Thanks() {
    return (
        <>
            <h2 style={{color: "red"}}>Special Thanks</h2>
            {engineers.map((engineer, i) => (
                <div key={i}>{engineer.firstName} {engineer.lastName}</div>
            ))}
            <p>And for everyone's kindness, openness, laughter, and welcoming environment</p>
        </>
    )
}
