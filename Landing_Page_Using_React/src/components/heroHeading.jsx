import "./heroHeading.css";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import Button from "./Button";
function HeroHeading() {
  return (
    <div className="herohead">
      <div className="heroheading">
        <h1>
          <span>Dive </span> Into the Depths
        </h1>
        <h1>
          of <span>Virtual Reality</span>
        </h1>
      </div>
      <div className="herpara">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
          eiusmod tempor incididunt ut labore et dolore <br />
          nisl tincidunt eget. Lectus mauris eros in vitae .
        </p>
      </div>
      <div className="hero-btns">
        <Button name="Build Your World" cName="jion-hydra" />
        <ArrowForwardSharpIcon className="icon" />
      </div>
    </div>
  );
}
export default HeroHeading;
