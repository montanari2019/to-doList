import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"
import style from "./Footer.module.css"

export function Footer() {

    const anoAtual = new Date().getFullYear()

    return (
        <div className={style.container}>

            <div className={style.logos}>
                <a  href="https://www.instagram.com/ikaro.montanari/" target="_blank" type="button">
                    <InstagramLogo size={30} />
                </a>
                <a href="https://www.linkedin.com/in/ikaro-montanari-5aa120208/"  target="_blank"type="button">
                    <LinkedinLogo size={30} />
                </a>
                <a href="https://github.com/montanari2019"  target="_blank"type="button">
                    <GithubLogo size={30} />
                </a>
            </div>

            <div className={style.text}>
                <strong>
                    Desenvolvido por Ikaro Bruno da Mata Monatanri
                </strong>
                <p>{anoAtual}</p>
            </div>

        </div>
    )
}