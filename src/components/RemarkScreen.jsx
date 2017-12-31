import React from 'react';
import Link from 'gatsby-link';
import Obfuscate from 'react-obfuscate';
import { FaPaperPlaneO, FaWrench } from 'react-icons/lib/fa';

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>It's cool</b><br /> that you're interested in my work.
    </p>
    <p>
      Currently I am open to taking on new work, as I have the capacity.
    </p>
    <p>
      At present, I am open to <b>freelance projects / remote contracts</b> with clients across the South of England.
    </p>
    <p>
      If you are currently looking for someone to develop (or re-develop) your website, drop me
      a message at <b><Obfuscate email='nick@nicklewis.net' /></b>.
    </p>
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hi there</b><br /> Before you leave
    </p>
    <p>
      I want you to know that at present, I am open to <b>full time remote contract</b> offers (Uk or Europe).
    </p>
    <p>
      If you feel that you want me on your team, drop me
      a message at <b><Obfuscate email='nick@nicklewis.net' /></b>.
    </p>
    <p>

    </p>
    <p>
      Thank you<br />
      <b>Greg</b>
    </p>
  </div>
);

const RemarkScreen = (props) => {
  const links = [
    { path: 'toolbox', icon: FaWrench },
    { path: 'services', icon: FaPaperPlaneO }
  ];

  return (
    <div className={`c-remark-screen ${props.isActive && 'c-remark-screen--is-active'}`}>
      {props.locationPathName === '/' ? ForHomePageContent : ForContactPageContent}
      {props.locationPathName === '/' &&
        <div className="c-remark-screen__links">
          {
            links.map((link) => (
              <Link
                key={link.path}
                className="c-remark-screen__link"
                to={`/${link.path}/`}
                onClick={props.onClick}
                tabIndex={props.isActive ? '1' : '-1'}
              >
                <link.icon /> {link.path}
              </Link>)
            )
          }
        </div>
      }

      <div className="c-remark-screen__bg"></div>
    </div>
  )
};

export default RemarkScreen;
