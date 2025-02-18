"use client";

import dynamic from "next/dynamic";
import { Document, Page, View } from "@react-pdf/renderer";
import { styles } from "../../Components/Pdf/style";
import "./cvpage.css";
import PDFHeader from "../../Components/Pdf/Sections/PDFHeader";
import PDFEducation from "../../Components/Pdf/Sections/PDFEducation";
import PDFExperience from "../../Components/Pdf/Sections/PDFExperience";
import PDFProjects from "../../Components/Pdf/Sections/PDFProjects";
import PDFSkills from "../../Components/Pdf/Sections/PDFSkills";
import PDFFooter from "../../Components/Pdf/Sections/PDFFooter";

// Dynamically import PDFViewer with ssr disabled
const PDFViewer = dynamic(
  async () => {
    const mod = await import("@react-pdf/renderer");
    return mod.PDFViewer;
  },
  {
    ssr: false,
    loading: () => <p>Loading PDF viewer...</p>,
  }
);

const CvPage = () => {
  return (
    <div className="pdf-container">
      <PDFViewer width="100%" height="100%">
        <Document
          title="Shay Ben Ishay - CV"
          author="Shay Ben Ishay"
          creator="Shay Ben Ishay"
          producer="React PDF"
          language="en"
        >
          <Page size="A4" style={styles.page}>
            <View>
              <PDFHeader />
              <PDFEducation />
              <PDFExperience />
              <PDFProjects />
              <PDFSkills />
            </View>
            <PDFFooter />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default CvPage;
