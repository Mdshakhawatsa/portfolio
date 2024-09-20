
import { Outlet } from 'react-router-dom';
import Footer from '../FOOTER/Footer';
import Navbar from '../NAVBAR/Navbar';
import "../BANNER/style.css"


const Root = () => {




    return (
        <div className='colorBackground '>


            <div>
                <div>
                    <Navbar />
                    <div className='md:w-[80%] md:m-auto  pl-20'>
                        <Outlet />
                    </div>
                </div>
            </div>
                <Footer></Footer>



        </div>
    );
};

export default Root;