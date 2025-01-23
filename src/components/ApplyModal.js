import "../styles/ApplyModal.css";
import badminton from "../assets/list/card/badminton.png";
import ApplyPeopleCard from "./ApplyPeopleCard";

function ApplyModal({ setModalOpen }) {
  const closeApplyModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="main">
      <div className={"modal-container"} onClick={closeApplyModal} />
      <div className={"modal-content"}>
        <div id="detail-image-box">
          <img id="detail-category-img" src={badminton} alt="category_img" />
          <div id="detail-category">{category}</div>
        </div>
        <div id="detail-title-box">{title}</div>
        <div id="detail-info-box">
          <div id="detail-content-box">
            <div id="detail-content">
              <div id="detail-createdBy">
                <span className="detail-content-key">모임장</span>
                <span className="detail-content-value">{createdBy}</span>
              </div>
              <div id="detail-location">
                <span className="detail-content-key">위치</span>
                <span className="detail-content-value">{location}</span>
              </div>
              <div id="detail-date">
                <span className="detail-content-key">일시</span>
                <span className="detail-content-value">{date}</span>
              </div>
              <div id="detail-time">
                <span className="detail-content-key">시간</span>
                <span className="detail-content-value">
                  {startTime} ~ {endTime}
                </span>
              </div>
              <div id="detail-number">
                <span className="detail-content-key">최대인원 수</span>
                <span className="detail-content-value">{maxNum}명</span>
              </div>
              <div id="detail-description">
                <span className="detail-content-key">설명</span>
                <span className="detail-content-value">{description}</span>
              </div>
            </div>
          </div>
          <div id="apply-people-box">
            <div id="apply-people-title">참석자 명단</div>
            <div id="apply-people-list">
              {/* <ApplyPeopleCard /> */}
              <div id="apply-people-card">오연주-Frontend</div>
              <div id="apply-people-card">이하린-Frontend</div>
              <div id="apply-people-card">성하은-Frontend</div>
              <div id="apply-people-card">진희원-Frontend</div>
              <div id="apply-people-card">김윤채-Frontend</div>
              <div id="apply-people-card">한규호-Frontend</div>
              <div id="apply-people-card">이재호-Frontend</div>
              <div id="apply-people-card">박서연-Frontend</div>
            </div>
          </div>
        </div>
        <div id="apply-button-box">
          <button id="apply-button">신청하기</button>
        </div>
      </div>
    </div>
  );
}

export default ApplyModal;
