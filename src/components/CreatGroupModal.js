import { useState, useRef } from "react";
import Modal from "react-modal";
import "../styles/Creatgroup.css";
import axios from 'axios'; 

const eventData = {
  id:"",
  memberID: "679138f8227ea344dd490b8e",
  groupName:"멋사 축구회",
  img:"/files/grouping/67913964227ea344dd490b94.png",
  description:"좋은 사람과 좋은 시간~",
  maxNum:"10명",
  date:"2025.03.02",
  //startTime: "오전12:00",
  time: "오후12:00",
  location: "평봉",
  category: "스포츠",
}

const apiUrl = "https://one3th-front-api.onrender.com/grouping/addGroup"

function CreatGroupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    groupName: "",
    time: "",
    date: "",
    location: "",
    description: "",
    category: "",
    img: "",
    memberId: "679138f8227ea344dd490b8e", 
  });
  
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isImageUpdated,setImageUpdated] = useState(false);

  const openModal = () => setIsOpen(true); 
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          img: reader.result, // 이미지 데이터를 formData에 저장
        });
      };
      reader.readAsDataURL(file);
    } else {
      console.log("유효하지 않은 파일입니다.");
      alert("유효하지 않은 파일입니다.");
    }
  };
  
  const [groupName, setGroupName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [maxNum, setMaxNum] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("00:00");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");


  const [show, setShow] = useState(false);
  
  const MouseHandleEnter = () => setShow(true);
  const MouseHandleLeave = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    axios.post(apiUrl, {
      ...formData,
      img: previewUrl,
    })
    .then(response => {
      console.log('소그룹이 성공적으로 등록되었습니다!', response.data);
      alert('소그룹이 성공적으로 등록되었습니다!');
      closeModal();
    })
    .catch(error => {
      console.error('소그룹 등록 중 오류가 발생했습니다.', error);
      alert('소그룹 등록 중 오류가 발생했습니다.');
    });
  };

  const handleDescriptionChange = (e) => {
  if (e.target.value.length <= 100) {
    setFormData({
      ...formData,
      description: e.target.value,
    });
  } else {
    alert("100자를 초과할 수 없습니다.");
  }
};

  return (
    <div className="Back">
      <button onClick={openModal}>소모임 생성</button>

      <Modal className="FormContainer" isOpen={isOpen} onRequestClose={closeModal} >
      
        <h2>소모임 생성하기</h2>

        <form className="inputForm" onSubmit={handleSubmit}>
        
        <div className="LeftCon">
          <div className="inputName">
            <label>소모임 이름</label>
            <br></br>
            <input 
              className="nameBox"
              type="text"
              placeholder="여기에 작성해 주세요"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>

          <div className="inputImage">
            <input 
              className="imageBox"
              type="file" 
              accept="image/*"
              onChange={(e) => {
                if(!e.target.files) return;
                const file = e.target.files[0];
                if(file){
                  let imgURL = URL.createObjectURL(file);
                  setImg(imgURL);
                };
              }}
              name="file"/>
          </div>
        </div> {/* 좌측 */}

        <div className="RightCon">
          <div className="inputDescrip">
            <label>소개글</label>
            <span>( {description.length}/100 )</span>
            <textarea
              className="descripBox"
              placeholder="본인의 모임에 관하여 설명해 주세요! (최대100자)"
              value={formData.description}
              onChange={handleDescriptionChange}
            />
          </div>

          <div className="inputNum">
            <label>인원</label>
            <button className="numBox" onMouseEnter={MouseHandleEnter} onMouseLeave={MouseHandleLeave}>제한인원 보기</button>
            {show && (
              <div className="exNum">
                최소인원은 <strong>3명</strong> 최대인원은<strong>10명 입니다</strong>
              </div>
            )}
            <br></br>
            <select 
              className="selectBox"
              value={maxNum} 
              onChange={(e) => setMaxNum(e.target.value)}>
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

          <div className="inputDate">
            <label>날짜</label>
            <br></br>
            <input 
              className="dateBox"
              type="date"
              value={date} 
              onChange={(e) => setDate(e.target.value)} />
          </div>

          <div className="inputTime">
            <label>시간</label>
            <br></br>
            <input
              className="TimeBox"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="inputCate">
            <label>카테고리</label>
            <br></br>
            {["스포츠", "노래방", "카공", "영화", "독서", "친목", "밥", "기타"].map((cate) => (
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
            <br></br>
            <input
              className="locateBox"
              type="text"
              placeholder="여기에 작성해 주세요 (ex: 평봉)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>{/* 우측 */}

          <div>
            <button className="createBtn" type="submit">생성하기</button>
          </div>
        </form>
        <button className="closeModalBtn" onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
}

export default CreatGroupModal;
