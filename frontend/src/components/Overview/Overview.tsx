import "./Overview.scss";

export default function Overview() {
  return (
    <div className="overview">
      <h2>Overview</h2>
      <h3>
        <em>
          SDE <s>Portal</s> Platform
        </em>
      </h3>
      <p className="release-date">Released November 17, 2023</p>
      <br />
      <p className="description">
        Single-paged, user-friendly interface; backed by user testing
      </p>
      <p className="description">Reduced sections from 120+ to ~20</p>
      <p className="description">Faster processing time: 14 weeks to 2 weeks</p>
      <br />

      <div className="tech-info">
        <h3>Technologies</h3>
        <p>AKS Cloud environment</p>
        <p>Postgres database</p>
        <p>Java and Angular accelerators</p>
        <p>GitHub Repository</p>
      </div>
      <br />
      <div className="upgrades">
        <h3>Upgrades</h3>
        <p>Angular to React</p>
        <p>Spotify Backstage</p>
      </div>
    </div>
  );
}
