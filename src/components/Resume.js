import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../assets/Resume.pdf';

const Resume = () => {
  //const [pdf, setPdf] = useState(null);

  // const handlePdfLoad = (resume) => {
  //   setPdf(resume);
  // };

  return (
    <Document file={resume} >
      <Page pageNumber={1} />
    </Document>
  );
};
export default Resume;