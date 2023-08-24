import logo from "../images/logo-bonus.svg";

const Scoreboard = () => {
    return (
      <section className="scoreboard">
        <img className="scoreboard__logo" src={logo} alt="game logo" />
        <article className="scoreboard__points">
          <h4 className="scoreboard__points--text">SCORE</h4>
          <h3 className="scoreboard__points--score">12</h3>
        </article>
      </section>
    );
}

export default Scoreboard;