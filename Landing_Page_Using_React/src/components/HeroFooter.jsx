import "./herofooter.css";
import FooterElem from "./FooterElem";
function Herofooter() {
  return (
    <div className="container">
      <FooterElem
        title="Pay us a visit"
        address="bandipora J&K 193502"
        icon="location"
      />
      <FooterElem
        title="Give us a call"
        address="(+91)123456789"
        icon="phone"
      />
      <FooterElem
        title="Send us a Message"
        address="contact@gmail.com"
        icon="mail"
      />
    </div>
  );
}
export default Herofooter;
