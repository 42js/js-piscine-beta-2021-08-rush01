import { useState } from "react";
import defaultImg from "../assets/img-default.svg";

const useImage = () => {
  const [imgTitle, setImgTitle] = useState("기본 이미지");
  const [imgPreview, setImgPreview] = useState(defaultImg);
  const [imgFile, setImgFile] = useState(null);

  const onChange = (e) => {
    setImgTitle(e.target.files[0].name);
    setImgFile(e.target.files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImgPreview(reader.result);
    };
  };

  return { imgTitle, imgPreview, imgFile, onChange };
};

export default useImage;
