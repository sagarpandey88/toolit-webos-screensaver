import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const ImageUploadPreview = (props: IImageUploadPreviewProps) => {
  const processFiles = () => {
    return props.files.map((file) => URL.createObjectURL(file));
  };

  return (
    <>
      <div>
        {processFiles().map((image, index) => (
          <>
            <img
              key={index}
              src={image}
              alt={`preview-${index}`}
              style={{ width: "200px", margin: "10px", aspectRatio: 1 }}
            />
            <div>
            <TextField id="outlined-basic" label="Title" variant="outlined" />
            <TextField id="outlined-basic" label="Title" variant="outlined" />
            <DatePicker />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

interface IImageUploadPreviewProps {
  files: File[];
}

export default ImageUploadPreview;
