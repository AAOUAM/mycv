import {FaUserAlt , FaCalendar , FaLinkedin } from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


export const Donneesperso = () => {
    return (
        
        <div>
            <hr/>
            <h1 className="text-2xl font-extrabold">Données personnelles</h1>
            <p><FaUserAlt/><strong> Nom :</strong> AAOUAM</p>
            <p><FaUserAlt/><strong> Prénom :</strong> Zakaria</p>
            <p><FaCalendar/><strong> Age :</strong> 20 ans</p>
            <p><FaLocationDot/><strong> Adresse :</strong> Ibn Sina , Agdal , Rabat</p>
            <p><BsTelephoneFill/><strong> Tél : </strong> +212 6 32 74 73 33 </p>
            <p><MdEmail/><strong> Email :</strong><a href="mailto:aaouam.zakaria@gmail.com">aaouam.zakaria@gmail.com</a></p>
            <p><FaLinkedin/><strong> Linkedin :</strong> <a href=" https://www.linkedin.com/in/zakaria-aaouam-347689293/">Profil de Linkedin</a></p>
        </div>
    );
}