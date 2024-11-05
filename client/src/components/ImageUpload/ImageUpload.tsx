import { useState } from "react";
import FileUploader from "./FileUploader";
import ImageUploadPreview from "./ImageUploadPreview";

const ImageUpload = (props) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const handleFileSelection = (files: File[]) => {
    setSelectedFiles((prev) => {
      return [...prev, ...files];
    });
  };

  const handleUploadImages = ()=>{
    
  }

  return (
    <>
      <div>
        <div>Upload Photos</div>
        <div>
          <FileUploader
            fileTypeRestriction={["image/"]}
            onFilesSelected={handleFileSelection}
          ></FileUploader>
          <ImageUploadPreview files={selectedFiles}></ImageUploadPreview>
        </div>
        <div>
          <input type="button" value={"Upload Images"} onClick={handleUploadImages} ></input>
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
