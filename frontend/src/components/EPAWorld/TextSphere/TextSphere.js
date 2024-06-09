import { useEffect } from "react";
import './TextSphere.css'
import TagCloud from "TagCloud";
import { cvsWordArr } from "./TextSphereWords";

export default function TextSphere() {
  useEffect(() => {
    return () => {
      let radii;

      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 200;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(".tagcloud", cvsWordArr, options);
    };
  }, []);

  return (
    <>
      <div className="text-sphere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};
