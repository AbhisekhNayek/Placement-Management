import React, { useState } from 'react';

function FileUploadForm() {
    
    const usn=`"${localStorage.getItem('token')}"`
  const [pdf, setPdf] = useState(null);

    console.log(usn)
  const handlePdfChange = (event) => {
    setPdf(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('usn', usn);
    formData.append('pdf', pdf);

    try {
      await fetch('http://localhost:1337/api/resumeUpload', {
        method: 'POST',
        body: formData
      });
      console.log('USN and PDF data uploaded successfully');
    } catch (error) {
      console.error('Error uploading USN and PDF data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <div>
        <label htmlFor="pdf">PDF:</label>
        <input type="file" id="pdf" onChange={handlePdfChange} />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUploadForm;
