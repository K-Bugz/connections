import Header from "../components/register/Header";
import Signup from "../components/register/Signup";
import logo from '../assets/connectedPurple.png';

export default function SignupPage(){
    return(
        <><img 
        alt=""
        className="h-20 w-100"
        src={logo}/>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}