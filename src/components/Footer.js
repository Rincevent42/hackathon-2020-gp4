import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render () {
        return(     
            <footer className='bloc_page'>
                <div className='com'>
                <img src="https://img.bfmtv.com/c/1000/600/a74/2c4ede7b5a93ac35480ee63a1bb37.jpeg" alt="logo" title="logo"></img>
                    <h3>the last visit</h3>
                    <p>The last visit :</p>
                    <p>"This museum was  Great"</p>
                    <p>28 april 2020</p> {/*ajouter l'aplication date  */}
                </div>
                <div className='contact'>
                    <h3>Contact</h3>
                    <a href="mailto:cocktail.finder@outlook.fr">contacts us</a>
                    <img src="https://miro.medium.com/max/621/1*XyvBPSfQebxwD652YQOtqw.png" alt="Nos réseaux sociaux" title="Nos réseaux sociaux"></img>
                </div>
                <div className='copiright'>
                    <p>copyright by lens78inc2020</p>
                    <p>Travel at the museum</p>
                    <p className='phrases'>"THe history </p>
                    <p className='phrases'>is the futur of humanity"</p>
                    <p><strong>Our conditions...</strong></p>
                </div>
            </footer>  
        );
    }
}

export default Footer;
