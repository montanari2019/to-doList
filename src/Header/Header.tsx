import styleHeader from "./Header.module.css";
import logo from "./../assets/rocket.svg";

export function Header() {
  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.todoFlex}>
        <img src={logo} /> 
        <strong className={styleHeader.strongTo}>to</strong>
        <strong className={styleHeader.strongDo}>do</strong>
      </div>
    </header>
  );
}
