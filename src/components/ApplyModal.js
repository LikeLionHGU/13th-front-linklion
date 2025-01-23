import "../styles/ApplyModal.css";
import { useEffect, useState } from "react";

function ApplyModal({ setModalOpen, groupId, memberId }) {
  const closeApplyModal = () => {
    setModalOpen(false);
  };

  const [group, setGroup] = useState([]);
  const [applyMembers, setApplyMembers] = useState([]);

  const getGroup = async () => {
    const response = await fetch(
      `https://one3th-front-api.onrender.com/grouping/groupList/${groupId}`
    );
    const json = await response.json();
    setGroup(json);
  };

  const getApplyMembers = async () => {
    const response2 = await fetch(
      `https://one3th-front-api.onrender.com/grouping/groupList/${groupId}`
    );
    const json2 = await response2.json();
    setApplyMembers(json2);
  };

  useEffect(() => {
    getGroup();
    getApplyMembers();
  }, []);

  return (
    <div className="main">
      <div className={"modal-container"} onClick={closeApplyModal} />
      <div className={"modal-content"}>
        <div id="detail-image-box">
          <img
            id="detail-category-img"
            src={`https://one3th-front-api.onrender.com${group.img_path}`}
            alt="category_img"
          />
          <div id="detail-category">{group.category}</div>
        </div>
        <div id="detail-title-box">{group.title}</div>
        <div id="detail-info-box">
          <div id="detail-content-box">
            <div id="detail-content">
              <div id="detail-createdBy">
                <span className="detail-content-key">모임장</span>
                <span className="detail-content-value">{group.createdBy}</span>
              </div>
              <div id="detail-location">
                <span className="detail-content-key">위치</span>
                <span className="detail-content-value">{group.location}</span>
              </div>
              <div id="detail-date">
                <span className="detail-content-key">일시</span>
                <span className="detail-content-value">{group.date}</span>
              </div>
              <div id="detail-time">
                <span className="detail-content-key">시간</span>
                <span className="detail-content-value">
                  {group.startTime} ~ {group.endTime}
                </span>
              </div>
              <div id="detail-number">
                <span className="detail-content-key">최대인원 수</span>
                <span className="detail-content-value">{group.maxNum}명</span>
              </div>
              <div id="detail-description">
                <span className="detail-content-key">설명</span>
                <span className="detail-content-value">
                  {group.description}
                </span>
              </div>
            </div>
          </div>
          <div id="apply-people-box">
            <div id="apply-people-title">참석자 명단</div>
            <div id="apply-people-list">
              {applyMembers.map((applyMember) => (
                <div id="apply-people-card">{applyMember}</div>
              ))}
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
