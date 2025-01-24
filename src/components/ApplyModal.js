import "../styles/ApplyModal.css";
import { useEffect, useState } from "react";

function ApplyModal({ setModalOpen, groupId, memberId }) {
  const closeApplyModal = () => {
    setModalOpen(false);
  };

  const [group, setGroup] = useState([]);
  const [applyMembers, setApplyMembers] = useState([]);
  const [hasJoined, setHasJoined] = useState(false);
  const [memberID, setMemberID] = useState("");

  const getGroup = async () => {
    const response = await fetch(`https://one3th-front-api.onrender.com/grouping/groupList/${groupId}`);
    const json = await response.json();
    setGroup(json);
  };

  const getApplyMembers = async (userID) => {
    const response2 = await fetch(
      `https://one3th-front-api.onrender.com/grouping/groupParticipants/${groupId}?memberID=${userID}`
    );
    const json2 = await response2.json();
    console.log(json2);
    setApplyMembers(json2.participants);
    setHasJoined(json2.hasJoined);
  };

  const joinGroup = async () => {
    const memID = { memberID: memberID };
    console.log(memID);
    const sendRequest = await fetch(`https://one3th-front-api.onrender.com/grouping/joinGroup/${groupId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(memID),
    })
      .then()
      .catch((error) => console.error(error));
    alert("신청하였습니다!");
    window.location.reload();
  };

  useEffect(() => {
    const userID = window.localStorage.getItem("memberID");
    setMemberID(userID);
    console.log("userID " + userID);
    console.log("groupID " + groupId);
    getGroup();
    getApplyMembers(userID);
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
        <div id="detail-title-box">{group.groupName}</div>
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
                <span className="detail-content-value">{group.description}</span>
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
          {hasJoined ? (
            <button id="apply-button-disabled" onClick={joinGroup} disabled>
              이미 신청하셨습니다
            </button>
          ) : (
            <button id="apply-button" onClick={joinGroup}>
              신청하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApplyModal;
