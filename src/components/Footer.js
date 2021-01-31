import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <footer>
            <p>Md. Abu Sadeed</p>
            <a style={{color: 'black'}} href={`mailto:abusadeed@iut-dhaka.edu`}>
                        <MailIcon/>
            </a>
                            
                        
            <a style={{color: 'black', padding: 10}} href='https://www.linkedin.com/in/abusadeed/'>
                        <LinkedInIcon/>
            </a>

            <a style={{color: 'black'}} href='https://github.com/KillerQueen-BitesZaDusto'>
                        <GitHubIcon/>
            </a>
        </footer>
    )
}

export default Footer
