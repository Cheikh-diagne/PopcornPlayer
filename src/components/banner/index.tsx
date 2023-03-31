import './Banner.css';
import BannerImg from '../../../public/fondBanner.png';
import Logo from '../../assets/logo_PopCorn.svg';
import SearchBar from '../searchBar';

export default function Banner(){

    return(
        <>
            <section className="Banner">
               <img src={Logo} />
               <div>
                 <SearchBar/>
               </div>
               
            </section>
        </>
    )
}
