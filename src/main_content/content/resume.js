import React, { Component } from "react";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import Resume from "../../assets/Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Projects extends Component {
  render() {
    return (
      <div style={{ overflowX: "hidden", textAlign: "center" }}>
        <button className="whiteButton buttonWrappedLink sidebarButton">
          <a
            href={Resume}
            download="Joel_Atwood_Resume.pdf"
            className="linkAsText"
          >
            Download Resume Here
          </a>
        </button>
        <Document className="pdf resume" file={Resume}>
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}

export default Projects;
