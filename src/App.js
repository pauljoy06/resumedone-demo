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
            <PersonalInformation />
            <MiscActions />
            <Footer />
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

const PersonalInformation = () => {
    return <div className='personal-information'>
       Peronsal Information 
    </div>
}

const MiscActions = () => {
    return <div className='misc-actions'>
        <div className='hirethebest-checkbox'>
            <div className='square'>
                
            </div>
            <div className='checkbox-text'>
                Show my profile to serious employers on <a>hirethesbest.io</a> for free 
            </div>
        </div>
        <div className='delete-account'>
            <div className='delete-account-heading'>
                Delete account 
            </div>
            <div className='delete-account-text'>
                If you delete your account you’ll be permanently removing it
                from our systems - you can’t undo it. 
            </div>
            <button className='delete-account-button'>
               Yes, Delete my account 
            </button>
        </div>
    </div>
}

const Footer = () => {
    return <div className='footer'>
        <div className='feedback-request'>
            <a>Get in touch with our support team</a> if you have any question or want to leave some feedback.
            We’ll be happy to hear from you. 
        </div>
        <div className='main-footer'>
            <div className='terms'>
                Terms & Conditions 
            </div>
            <div className='privacy-policy'>
                Privacy Policy 
            </div>
            <div className='faq'>
                FAQ 
            </div>
            <div className='contact-us'>
                Contact Us 
            </div>
        </div>
    </div>
}

export default App;
