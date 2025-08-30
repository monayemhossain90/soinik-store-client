
import {
    EmailOutlined,
    Facebook,
    LocalPhoneOutlined,
    LocationOnOutlined, WhatsApp,
} from "@mui/icons-material";



const Footer = () => {
    return (
        <>
             <div className="bg-gradient-to-r from-[#434343] to-[#000000] text-white">
                 <div className="container grid grid-cols-1 md:grid-cols-2 py-4">
                     {/*Store information*/}
                     <div className="flex flex-1 flex-col flex-wrap p-2">
                         <h1 className="text-2xl">Contact</h1>
                         <p>
                             Fee Free to Contact with Us
                         </p>

                         <div className="flex items-center justify-center self-start my-3 gap-4">
                             <div className="rounded-full cursor-pointer p-2 text-white bg-blue-500">
                                 <Facebook/>
                             </div>
                             <div className="rounded-full cursor-pointer p-2 text-white bg-orange-500">
                                 <WhatsApp/>
                             </div>
                             <div className="rounded-full cursor-pointer p-2 text-white bg-green-500">
                                 <EmailOutlined/>
                             </div>
                         </div>
                     </div>

                     {/*Contact Information*/}
                     <div className="flex-1 flex flex-col p-2 gap-5">
                         <div className="flex">
                             <LocationOnOutlined className="text-[#8a4af3]"/>
                             <p className='pl-3'>Kaptai, Rangamati</p>
                         </div>
                         <div className="flex">
                             <LocalPhoneOutlined className="text-[#521da8]"/>
                             <p className='pl-3'>01789-039597</p>
                         </div>
                         <div className="flex">
                             <EmailOutlined className="text-[#8a4af3]"/>
                             <p className='pl-3'>kabirhossain1245@gmail.com
</p>
                         </div>
                     </div>
                 </div>
             </div>
             <div
                className="py-8 bg-gradient-to-r from-[#434343] to-[#000000] px-4 text-white text-xl sm:text-2xl text-center">
                All Rights Reserved By &copy;Soinik Store 

               
            </div>

        </>
    );
};

export default Footer;