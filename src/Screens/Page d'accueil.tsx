import { Donneesperso } from "../Composants/Donneesperso"
import { Formation } from "../Composants/Formation"
import { Objpro } from "../Composants/Objpro"
import { Tec } from "../Composants/Tec"
import { Langue } from "../Composants/Langue"
import { Loisir } from "../Composants/Loisir"
import { Profilepicture } from "../Composants/Profilepicture"



export const Pageaccueil = () => {
    return(
        <div>
            <div className='box1'>
                    <Profilepicture/>
                    <Donneesperso/>
                    <Formation/>
            </div>
            <div className='box2'>
                    <Objpro/>
                    <Tec/>
                    <Langue/>
                    <Loisir/>
            </div>
            <footer>©2023 AAOUAM Zakaria</footer>
        </div>
    )
}