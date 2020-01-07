import React, { Component } from "react";
import _ from "lodash";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import Resume from "../../assets/Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Projects extends Component {
  constructor(props) {
    super(props);
  }
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
        <Document
          className="pdf resume"
          style={{ left: "-50px" }}
          file={Resume}
        >
          <Page style={{ left: "-50px" }} pageNumber={1} scale={1.25} />
        </Document>
      </div>
    );
  }
}

export default Projects;
