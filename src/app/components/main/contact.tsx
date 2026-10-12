import React from "react";
import { FaGithub,FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export   function Contact(){
    return(

        
<>
<div className="justify-end border border-teal-800 p-10 mt-8">
Open to full-stack and AI automation engineering roles
</div>
<div className="flex flex-row gap-2">
{/* Social Media Links */}
<div className="flex flex-row mt-4 align-middle items-center gap-2 mx-auto">
  <a href="https://github.com/aadesh-kumarr" aria-label="GitHub">
    <FaGithub className="contact-btns" />
  </a>
  <a href="https://www.linkedin.com/in/aadesh-kumar/" aria-label="LinkedIn">
    <FaLinkedin className="contact-btns" />
  </a>
  <a href="mailto:aadeshk306@gmail.com" aria-label="Email Aadesh">
            <FaEnvelope className="contact-btns" />
          </a>

</div>
</div>
</>

)
}
