import React from 'react';

import GithubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h5>Criado por &copy;Luiz Filipe da Silva de Jesus</h5>
            <div className="links">
                <a
                    rel="noreferrer"
                    href="https://github.com/Luiz-Suvilao"
                    target="_blank"
                >
                    <GithubIcon />
                </a>

                <a
                    rel="noreferrer"
                    href="https://www.instagram.com/luiz_filipe.dev/"
                    target="_blank"
                >
                    <InstagramIcon />
                </a>
            </div>
            <h5>Versão: 1.0.0</h5>
        </footer>
    );
}

export default Footer;