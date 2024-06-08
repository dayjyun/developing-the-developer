import TextSphere from "./TextSphere/TextSphere"
import "./EPAWorld.scss"

export default function EPAWorld() {
    return(
        <div className="epa-world">
            <h2>EPA World</h2>
            <h3>Software Development Enterprise</h3>
            <TextSphere />
            <div className="text-area">
                <p>SDE's mission is to automate and accelerate requests that are commonly channeled through Service Now</p>

                <ul>
                    <li>Cut down processing time</li>
                    <li>Automation</li>
                </ul>
            </div>


            <p>Through digging around, I found resources</p>
            <p>Azure Docs</p>
            <p>Acronym finder</p>
            <p>ExpressCloud</p>
            <p>Azure</p>
        </div>
    )
}
