import React, { useState } from "react";
import axios from "axios";

function BlogList() {
  const [text, setText] = useState([]);
  const onClick_get = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/blog/",
      );
      setText(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  //포스트는 아직 제대로 동작 안함. -> 글 올리는 건 django admin에서 우리가 노가다로 올리는 걸로
  const onClick_post = async () => {
    try {
      const response = await axios.post(
        "https://127.0.0.1:8000/blog/", {
          tetle: "리액트 테스트용",
          body: "test",
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button onClick={onClick_post}>post</button>
      <button onClick={onClick_get}>불러오기</button>
      {text && <textarea rows={15} value={JSON.stringify(text, null, 2)} readOnly={true}/>}

      <h1>list</h1>
      {text && <img src="http://127.0.0.1:8000/media/2023/07/23/header-bg.jpg" alt="" />}

    </>
  );
}

export default BlogList;