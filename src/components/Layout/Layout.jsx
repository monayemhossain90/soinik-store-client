
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import TitleMetaTag from "./TitleMetaTag.jsx";


const Layout = ({children}) => {
    return (
        <>

          <Navbar/>

            {children}


            <Footer/>
        </>
    );
};

export default Layout;