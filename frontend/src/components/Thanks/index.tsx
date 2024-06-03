import engineers from './Engineers.json'

export default function Thanks() {
    return (
        <>
            {/* <h1>Thanks</h1> */}
            {engineers.map((engineer, i) => (
                <div key={i}>{engineer.firstName} {engineer.lastName}</div>
            ))}
        </>
    )
}
