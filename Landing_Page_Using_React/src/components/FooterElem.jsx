import "./footerelem.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

function FooterElem(props) {
  const renderIcon = () => {
    switch (props.icon) {
      case "location":
        return <LocationOnIcon className="icon2" />;
      case "mail":
        return <MailOutlineIcon className="icon2" />;
      case "phone":
        return <PhoneIcon className="icon2" />;
      default:
        return null;
    }
  };

  return (
    <div className="footerelem">
      {renderIcon()}
      <div className="info">
        <h2>{props.title}</h2>
        <p>{props.address}</p>
      </div>
    </div>
  );
}

export default FooterElem;
