import React from 'react'
import './Social.css'
import {
    FaFacebookF
} from "react-icons/fa";
import {
    FaInstagram
} from "react-icons/fa";
import {
    FaLinkedinIn
} from "react-icons/fa";
import {
    FaTwitter
} from "react-icons/fa";
function Social() {
    return (
        <div className="Social">
            <div className="instagram">
                  <a href="#"><FaInstagram /></a>
           </div>
           <div className="facebook">
                <a href="#"><FaFacebookF /></a>
           </div>
           <div className="twitter">
                <a href="#"><FaTwitter /></a>
           </div>
           <div className="Linkedin">
                <a href="#"><FaLinkedinIn /></a>
           </div>
        </div>
    )
}

export default Social
