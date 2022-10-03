import React, { useRef } from "react";

  
export default function CsvUploadForm({setCsvFile}) {
  const csvInputRef = useRef();  

  const submitCSV = (e) => {
      const file = e.target.files[0];

      if (file) {
        setCsvFile(file);
      } else {
        setCsvFile(null);
      }
  };

  return (
    <form data-testid="csvuploadform">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
            submitCSV(e);
        }}
        ref={csvInputRef}
        className="d-none"
        data-testid="fileupload"
      />
      <button
        onClick={(e) => {
            e.preventDefault();
            csvInputRef.current.click();
        }}
        className="btn btn-primary"
      >
        OPEN
      </button>
    </form>
  )
}
