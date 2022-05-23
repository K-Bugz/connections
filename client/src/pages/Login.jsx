import Header from "../components/register/Header"
import Login from "../components/register/Login"
import logo from '../assets/connectedPurple.png';

export default function LoginPage(){
    return(
        <><img 
        alt=""
        className="h-20 w-100"
        src={logo}/>
             <Header
             
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
        </>
    )
}