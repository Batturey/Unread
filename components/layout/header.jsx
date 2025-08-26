import Image from "next/image";
import { LuSquareMenu } from "react-icons/lu";
function NewsCard() {
  return (
    <div className="news-container">
      <Image src="/images/hero-image.jpg" width={1920} height={1080} />
      {/* Left Section (Image + Caption) */}
      <div className="news-left">
        <img className="/images/hero-image.jpg" src="logo.png" alt="News" />
        <LuSquareMenu />
        <p className="editor-choice">Редакцын сонголт</p>
      </div>

      {/* Right Section (Article Info) */}
      <div className="news-right">
        <p className="tag">Өнөөдөр</p>
        <h1 className="title">
          Би хэрхэн ажилладаг вэ? <br />
          АНУ-аас Монгол Улсад суугаа Элчин сайд Ричард Буанган
        </h1>
        <div className="author">
          <img
            src="https://unread.today/files/avatars/majigsuren.jpg"
            alt="author"
            className="author-img"
          />
          <div>
            <p className="author-name">Majigsuren Tsogbadrakh</p>
            <p className="meta">8 сарын 25, 2025 • 9 мин</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
