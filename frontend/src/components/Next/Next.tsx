import { Typography } from "@mui/material"
import "./Next.scss"

export default function Next() {
    return (
        <div className="next">
            <Typography variant="h2">Coding and Beyond</Typography>
            <em><Typography variant="h3">Continuous Learning and Growth</Typography></em>
            <p>Azure</p>
            <p>Docker</p>
            <p>AI</p>
            <p>CSS</p>

            <em><Typography variant="h3">But wait, there's more!</Typography></em>
            <p>Now that I have a better understanding of programming</p>
            <p>Refactor and improve previous projects </p>
            <p>Backend</p>
            <p>Frontend</p>
            <p>Testing</p>
            <ul>
                <li>Increase speed</li>
                <li>Increase knowledge</li>
                <li>Increase confidence</li>
                <li>Master the best practices</li>
                <li>DSA</li>
            </ul>
        </div>
    )
}
