import "../styles/Card.css";

function Card({ img_path, groupName, category, location, createdBy }) {
  return (
    <div id="list-card">
      <div id="list-image-box">
        <img
          id="list-category-img"
          src={`https://one3th-front-api.onrender.com${img_path}`}
          alt="category_image"
        />
      </div>
      <div id="list-info-box">
        <div id="list-title-box">{groupName} </div>
        <div id="list-content-box">
          <div id="list-category">{category}</div>
          <div id="list-content">
            <div id="list-location">
              <span className="list-content-key">위치</span>
              <span className="list-content-value">{location}</span>
            </div>
            <div id="list-organizer">
              <span className="list-content-key">주선자</span>
              <span className="list-content-value">{createdBy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
