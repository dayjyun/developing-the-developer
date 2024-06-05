import { useEffect } from "react";
import './TextSphere.css'
import TagCloud from "TagCloud";
// import TagCloud from "TagCloud";

export default function TextSphere() {
  useEffect(() => {
    return () => {
      let radii;
      const container = ".tagcloud"
      const texts = [
        "APM",
        "DevEco",
        "EPA",
        "ExpressCloud",
        "FastLane",
        "FlyWay",
        "FreeMarker",
        "ITPM",
        "ITPR",
        "Intake",
        "Lombok",
        "SDE",
        "ServiceNow",
        "Splunk",
        "Spoke",
        "TerraForm",
        "WebFlux",
      ];

      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud('.tagcloud', texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-sphere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};
