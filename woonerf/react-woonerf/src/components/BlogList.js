import React, { useState } from "react";
import axios from "axios";

function BlogList() {
  const [text, setText] = useState([]);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/blog/",
      );
      setText(response.data);
    } catch (error) {
      console.log(error)
    }
  }

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
      <button onClick={onClick}>불러오기</button>
      {text && <textarea rows={15} value={JSON.stringify(text, null, 5)} readOnly={true}/>}
    </>
  );
}

export default BlogList;