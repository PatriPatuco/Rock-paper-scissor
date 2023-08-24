import rules from "../images/image-rules-bonus.svg";
import close_i from "../images/icon-close.svg";

const Rules = () => {
    return (
<section className="rules">
    <h2 className="rules__title">RULES</h2>
<img className="rules__img" src={rules} alt="rules graph images"></img>
<img className="rules__i" src={close_i} alt="close window icon"></img>
</section>
    );
}

export default Rules;