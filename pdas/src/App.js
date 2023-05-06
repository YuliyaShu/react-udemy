import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import Alexa from './images/alexa.png';
import Cortana from './images/cortana.png';
import Siri from './images/siri.png';

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistant</p>
                </div>
            </section>
            
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-2'>
                            <ProfileCard 
                                img={Alexa} 
                                title='1' 
                                handle='@1'
                                description='1111111'/>
                        </div>
                        <div className='column is-2'>
                            <ProfileCard 
                                img={Cortana} 
                                title='2' 
                                handle='@2'
                                description='2222222'/>
                        </div>
                        <div className='column is-2'>
                            <ProfileCard 
                                img={Siri} 
                                title='3' 
                                handle='@3'
                                description='3333333'/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;
