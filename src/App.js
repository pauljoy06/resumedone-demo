import './App.css';
import {Icon, Sidebar} from './components';

import logo from './icons/paul.jpeg';
import briefCase from './icons/brief_case.svg';

function App() {
  return (
    <div className='App'>
        <Sidebar />
        <div className='main-section'>
            <PremiumAccountBanner />
        </div>
    </div>
  );
}

const PremiumAccountBanner = () => {
    return <div className='premium-account-banner'>
        <div className='left-section'>
            <Icon image={briefCase} size={48}/>  
        </div>
        <div className='right-section'>
            <div className='title'>
                Premium Account 
            </div>
            <div className='description'>
                You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats. 
            </div>
        </div>
    </div>
}

export default App;
