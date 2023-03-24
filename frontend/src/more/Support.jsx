import React, { useRef, useState } from 'react'
import MetaData from './Metadata';
import "./Support.css";
import emailjs from "@emailjs/browser";
import BottomTab from './BottomTab.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = ({history}) => {

    const [done, setDone] = useState(false);

    const formRef = useRef(null)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_lfhn37t', 'template_7u08yrs', formRef.current, 'LuBPmVCr1H9mMT2Fy')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
       <>
       <MetaData title="Support"/>
       <div 
       className='support'
       style={{
           width:"100%",
           justifyContent:"center",
           alignItems:"center",
           padding:'50px 0',
           backgroundColor: "#DBE1EF"
       }}>
           <h2 className='support__heading' style={{
               textAlign:"center"
           }}>Hey How can we improve our services</h2>
           <h2  className='support__heading' style={{
               textAlign:"center"
           }}>Enquiry for something...</h2>
           <div>
               <form style={{
                   width:"400px",
                   margin:"auto",
                   padding:"20px 0"
               }} ref={formRef}
               onSubmit={handleSubmit}
               >
                   <input type="text" placeholder='Write your Name ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px",
                       backgroundColor:"#F5F5DD"
                   }} 
                   name='from_name'
                   />
                    <input type="text" placeholder='Write a Subject ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px",
                       backgroundColor:"#F5F5DD"
                   }}
                   name='user__subject'
                   />
                   <input type="email" placeholder='Write your Email ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px",
                       backgroundColor:"#F5F5DD"
                   }}
                   name='from_email'
                   />
                   <textarea cols="30" rows="5" required placeholder='Write your message ...'
                   style={{
                    border:"none",
                    outline:"none",
                    width:"100%",
                    borderBottom:"1px solid #3BB77E",
                    margin:"10px 0",
                    fontSize:"1.2vmax",
                    backgroundColor:"#F5F5DD"
                }}
                name='message'
                   ></textarea>
                   <button 
                   style={{
                       border:"none",
                       cursor:"pointer",
                       width:"100%",
                       background:"#121426",
                       height:"40px",
                       margin:"10px 0",
                       color:"#fff",
                       fontSize:"1.2vmax"
                   }}
                   >Submit</button>
                   {done && toast.success("Thanks for your report we will reply it in very soon...")}
               </form>
               <div className='animation'>

               </div>
           </div>
       </div>
       <ToastContainer 
       position="bottom-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       />
       <BottomTab />
       </>
    )
}

export default Support
