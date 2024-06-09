import "./Overview.scss"
import sdeLogo from "../../assets/images/sde-logo.png"

export default function Overview() {
    return (
      <div className="overview">
        {/* <h2>Overview</h2> */}
        <img src={sdeLogo} alt="SDE logo" />
        <h3>
          <em>
            SDE <s>Portal</s> Platform
          </em>
        </h3>
        <p>SDE's flagship product</p>
        <p>Released November 17, 2023</p>
        <p>Java and Angular Accelerators</p>

        <br />
        <p>User friendly interface; backed by user testing</p>
        <p>Cut down in the amount of questions asked from 120+ to ~20.</p>
        <p>What normally would take 14 weeks, now takes 2 weeks</p>
      </div>
    );
}
