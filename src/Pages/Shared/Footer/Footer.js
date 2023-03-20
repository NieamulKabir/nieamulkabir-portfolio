import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
        <div className='font-serif'>
            <footer className="footer footer-center p-10 bg-green-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4 text-gray-900 font-semibold">
                    <AnchorLink href='#home'>Home</AnchorLink>
                    <AnchorLink href='#about'>About</AnchorLink>
                    <AnchorLink href='#projects'>Projects</AnchorLink>
                    <AnchorLink href='#contact'>Contact</AnchorLink>

                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a
                            href="linkedin.com/in/md-nieamul-kabir-101b491b2"
                            className=""
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="fa-brands fa-linkedin-in text-2xl"></i>

                        </a>
                        <a
                            href="https://github.com/NieamulKabir"
                            className=""
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-github text-2xl"></i>

                        </a>
                        <a
                            href="https://www.facebook.com/nieamul.kabir.3"
                            className=""
                            target="_blank"
                            rel="noreferrer"
                        >
                            {' '}
                            <i className="fa-brands fa-facebook text-2xl"></i>

                        </a>
                    </div>
                </div>
                <div>
                    <p>Copyright © {year} - All right reserved by <span className='text-orange-600'> Md.Nieamul Kabir</span></p>
                   
                </div>
            </footer>
        </div>
    );
};

export default Footer;