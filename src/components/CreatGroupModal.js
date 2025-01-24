import { useState, useRef } from "react";
import Modal from "react-modal";
import "../styles/Creatgroup.css";
import axios from "axios";

const apiUrl = "https://one3th-front-api.onrender.com/grouping/addGroup";

function CreatGroupModal({ createModalOpen, setCreateModalOpen }) {
  const [groupName, setGroupName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [maxNum, setMaxNum] = useState("");
  const memberID = window.localStorage.getItem("memberID");

  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      alert("유효하지 않은 파일입니다.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("이미지를 업로드해주세요!");
      return;
    }

    const formData = new FormData();
    formData.append("groupName", groupName);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    formData.append("date", date);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("img", file);
    formData.append("maxNum", maxNum);
    formData.append("memberID", memberID);

    console.log("Form Data:", Array.from(formData.entries()));

    axios
      .post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("소그룹이 성공적으로 등록되었습니다!", response.data);
        alert("소그룹이 성공적으로 등록되었습니다!");
        setCreateModalOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("소그룹 등록 중 오류가 발생했습니다.", error);
        alert("소그룹 등록 중 오류가 발생했습니다.");
      });
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 100) {
      setDescription(e.target.value);
    } else {
      alert("소개글은 100자를 초과할 수 없습니다.");
    }
  };

  return (
    <div className="Back">
      <Modal
        className="FormContainer"
        isOpen={createModalOpen}
        onRequestClose={() => setCreateModalOpen(false)}
      >
        <h2>소모임 생성하기</h2>

        <form className="inputForm" onSubmit={handleSubmit}>
          {/* 왼쪽 영역 */}
          <div className="LeftCon">
            {/* 소모임 이름 */}
            <div className="inputName">
              <label>소모임 이름</label>
              <input
                className="nameBox"
                type="text"
                placeholder="여기에 작성해 주세요"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>

            {/* 이미지 업로드 */}
            <div className="inputImage">
              <label>이미지 업로드</label>
              <input
                className="imageBox"
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                ref={fileInputRef}
              />
            </div>

            {/* 날짜 */}
            <div className="inputDate">
              <label>날짜</label>
              <input
                className="dateBox"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* 시간 */}
            <div className="inputTime">
              <label>시간</label>
              <input
                className="TimeBox"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              ~
              <input
                className="TimeBox"
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          {/* 오른쪽 영역 */}
          <div className="RightCon">
            <div className="inputDescrip">
              <label>소개글</label>
              <span>( {description.length}/100 )</span>
              <textarea
                className="descripBox"
                placeholder="본인의 모임에 관하여 설명해 주세요! (최대100자)"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>

            <div className="inputNum">
              <label>인원</label>
              <div className="exNum">
                제한인원 보기
                <div className="numHoverText">
                  최소인원은 <strong>3명</strong> 최대인원은{" "}
                  <strong>10명</strong>입니다.
                </div>
              </div>

              <select
                className="selectBox"
                value={maxNum}
                onChange={(e) => setMaxNum(e.target.value)}
              >
                <option value="">선택</option>
                <option value="3명">3명</option>
                <option value="4명">4명</option>
                <option value="5명">5명</option>
                <option value="6명">6명</option>
                <option value="7명">7명</option>
                <option value="8명">8명</option>
                <option value="9명">9명</option>
                <option value="10명">10명</option>
              </select>
            </div>

            <div className="inputCate">
              <label>카테고리</label>
              {[
                "스포츠",
                "노래방",
                "카공",
                "영화",
                "독서",
                "친목",
                "밥",
                "기타",
              ].map((cate) => (
                <label className="cateBox" key={cate}>
                  <input
                    type="radio"
                    value={cate}
                    checked={category === cate}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  {cate}
                </label>
              ))}
            </div>

            <div className="inputLocate">
              <label>모임 장소</label>
              <input
                className="locateBox"
                type="text"
                placeholder="여기에 작성해 주세요 (ex: 평봉)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button className="createBtn" type="submit">
              생성하기
            </button>
          </div>
        </form>

        <button
          className="closeModalBtn"
          onClick={() => setCreateModalOpen(false)}
        >
          닫기
        </button>
      </Modal>
    </div>
  );
}

export default CreatGroupModal;
