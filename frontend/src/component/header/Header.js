import React from "react";
import "./Header.css"
import {BsWhatsapp} from 'react-icons/bs'
import logo from '../../assets/ur.png'
import { Container } from '@mui/material';

function Header() {
  return (
  <header className="header">
      
      <div className="logo">
        <a href="/">
        <img src={logo} alt="SearchUrCollege" />

        </a>
      </div>
    {/* Container */}
      <div className="nav-container"> 

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Courses, Colleges, Exams..."
          />
          <button>Search</button>
        </div>        
        <nav className="nav-menu">
          <ul className="menu">
            <li className="dropdown">
              <a href="/">Engineering</a>
              <div className="megamenu">
                <ul className="submenu ">
                  <li>
                    <a href="/">Top Colleges</a>
                    <div className="submenu-container">
                      <ul className="submenu2">
                        <li>
                          <a href="/">Top IITs</a>
                        </li>
                        <li>
                          <a href="/">Top NITs</a>
                        </li>
                        <li>
                          <a href="/">Top central Universities</a>
                        </li>
                      </ul>
                      </div>
                  </li> 

                  <li>
                    <a href="/">Popular Courses</a>
                    <div className="submenu-container">
                    <ul className="submenu2">
                      <li>
                        <a href="/">B.Tech</a>
                      </li>
                      <li>
                        <a href="/">M.Tech</a>
                      </li>
                      <li>
                        <a href="/">MCA</a>
                      </li>
                    </ul>
                    </div>
                  </li>  
                                            
                  <li>
                    <a href="/">Popular Exams</a>
                    <div className="submenu-container">
                    <ul className="submenu2">
                      <li>
                        <a href="/">JEE Mains</a>
                      </li>
                      <li>
                        <a href="/">WBJEE</a>
                      </li>
                      <li>
                        <a href="/">GATE</a>
                      </li>
                    </ul>
                    </div>
                  </li>                                      
                 

                </ul>
              </div>
            </li>

            <li className="dropdown">
              <a href="/">MBA</a>
              <div className="megamenu">
              <ul className="submenu ">
                  <li>
                    <a href="/">Top Colleges</a>
                    <div className="submenu-container">
                      <ul className="submenu2">
                        <li>
                          <a href="/">IIM Ahmedabad</a>
                        </li>
                        <li>
                          <a href="/">IIM Indore</a>
                        </li>
                        <li>
                          <a href="/">IIM Lucknow</a>
                        </li>
                      </ul>
                      </div>
                  </li> 

                  <li>
                    <a href="/">Popular Courses</a>
                    <div className="submenu-container">
                    <ul className="submenu2">
                      <li>
                        <a href="/">Finance</a>
                      </li>
                      <li>
                        <a href="/">Marketing</a>
                      </li>
                      <li>
                        <a href="/">Human Resource Management</a>
                      </li>
                    </ul>
                    </div>
                  </li>  
                                            
                  <li>
                    <a href="/">Popular Exams</a>
                    <div className="submenu-container">
                    <ul className="submenu2">
                      <li>
                        <a href="/">CAT</a>
                      </li>
                      <li>
                        <a href="/">GMAT</a>
                      </li>
                      <li>
                        <a href="/">CMAT</a>
                      </li>
                    </ul>
                    </div>
                  </li>                                      
                 

                </ul>
              </div>
            </li>

            <li className="dropdown">
              <a href="/">Medical</a>
              <div className="megamenu">
              <ul className="submenu ">
                  <li>
                    <a href="/">Top Colleges</a>
                    <div className="submenu-container">
                      <ul className="submenu2">
                        <li>
                          <a href="/">AIIMS</a>
                        </li>
                        <li>
                          <a href="/">Madras Medical College</a>
                        </li>
                        <li>
                          <a href="/">PMC</a>
                        </li>
                      </ul>
                      </div>
                  </li> 

                  <li>
                    <a href="/">Popular Courses</a>
                    <div className="submenu-container">
                    <ul className="submenu2">
                      <li>
                        <a href="/">MBBS</a>
                      </li>
                      <li>
                        <a href="/">Unani</a>
                      </li>
                      <li>
                        <a href="/">Dental</a>
                      </li>
                    </ul>
                    </div>
                  </li>  
                                            
                  <li>
                    <a href="/">Popular Exams</a>
                    <div className="submenu-container">
                    <ul className="submenu2">
                      <li>
                        <a href="/">NEET</a>
                      </li>
                      <li>
                        <a href="/">MRCP</a>
                      </li>
                      <li>
                        <a href="/">NEET-PG</a>
                      </li>
                    </ul>
                    </div>
                  </li>                                      
                 

                </ul>
              </div>
            </li>

            <li className="dropdown">
              <a href="/">Career Guidance</a>
              <div className="megamenu">
                <ul>
                  <li>
                    <a href="/">Career Article 1</a>
                  </li>
                  <li>
                    <a href="/">Career Article 2</a>
                  </li>
                  <li>
                    <a href="/">Career Article 3</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/">More</a>
            </li>
          </ul>
        </nav>      
      </div>

      <div className="headend">
        <div className="queryhead">
         <BsWhatsapp className='contact__option-icon' /> <span>Ask a query on
8826978461</span>
        </div>
        <div className="user-account">
          <a href="/">Sign In</a>
          <span> / </span>
          <a href="/">Register</a>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
