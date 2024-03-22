import "./heroimage.css";
import heroimage from "../assets/heroImage1.jpeg";
function HeroImage() {
  return (
    <div className="image-con">
      <img src={heroimage} alt="hero-section image" />
    </div>
  );
}
export default HeroImage;
