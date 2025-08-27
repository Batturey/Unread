import "./header.css";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <>
      <header className="main-header-content">
        <div className="header-left">
          <div className="header-image">
            <TiThMenu />  
          </div>
        </div>

        <div className="header-logo">
          <Image
            src="/images/logo.png"
            alt="unread logo"
            width={130}
            height={18}
            className="unread-logo"
          />
        </div>

        <div className="header-search-button">
          <Image
            src="/images/cookedp.png"
            alt="search button"
            width={50}
            height={50}
            className="search-button"
          />
          <input
            type="text"
            placeholder="Хайлт хийх"
            className="header-input"
          />
        </div>

        <div className="header-right">
          <div className="next-article">
            <p>
              <span className="transparent"> Дараагийн нийтлэл: </span>
              <span className="next-article-category"> TECHWORM </span>
              <span className="chip">
                Өнөөдөр орно <span className="symbols"> • </span>
              </span>
            </p>
          </div>

          <div className="app-icons">
            <nav>
              <a href="https://www.facebook.com/UnreadToday/">
                <FaFacebookSquare size={16} className="facebook-icon" />
              </a>
              <a href="https://www.instagram.com/UnreadToday">
                <CiInstagram size={16} className="instagram-icon" />
              </a>
              <a href="https://x.com/UnreadToday">
                <FaTwitter size={16} className="twitter-icon" />
              </a>
              <a href="https://www.linkedin.com/UnreadToday">
                <FaLinkedinIn size={16} className="linkedin-icon" />
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
