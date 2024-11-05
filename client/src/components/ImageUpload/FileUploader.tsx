import { useRef } from 'react';

const FileUploader = (props: IFileUploaderProps) => {
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    processFiles(files);
  };

  const processFiles = (files: File[]) => {
    const filteredFiles = props.fileTypeRestriction
      ? files.filter((file) =>
          props.fileTypeRestriction?.some((type) => file.type.startsWith(type))
        )
      : files;

    props.onFilesSelected(filteredFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    processFiles(files);
  };

  return (
    <div>
      <div
        onClick={handleDivClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: '300px',
          height: '200px',
          border: '2px dashed #ccc',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        Drag & Drop Images Here
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        multiple={true}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploader;

interface IFileUploaderProps {
  onFilesSelected(files: File[]): void;
  fileTypeRestriction?: string[];
}
