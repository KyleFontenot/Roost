import React from 'react'

import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'

const MyDoc = ({primaryColor, secondaryColor, adjectiveFirst, adjectiveSecond}) => (
  <Document>
    <Page>
      // My document data
    </Page>
  </Document>
)

const PDFbutton = ({primaryColor, secondaryColor, adjectiveFirst, adjectiveSecond}) => {

	return (
		<PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
	)
}
// const PDFbutton = ({primaryColor, secondaryColor, adjectiveFirst, adjectiveSecond}) => {
// 	function composePDF(props) {
// 		void(0);
// 		const doc = new jsPDF({
// 		  orientation: "landscape",
// 		  unit: "in",
// 		  format: [4, 6]
// 		});
//
// 	}
//
// 	return (
// 		<button className="button"
// 		style={{
// 			marginTop: "2rem",
// 			marginBottom: "6rem",
// 			backgroundColor: "blue",
// 			color: "white",
// 			fontWeight: "bold",
// 			fontSize: "1.5rem",
// 		}}
// 		onClick={
// 			composePDF
// 			}
// 		>
// 			PDF it
// 		</button>
// 	)
// }

export default PDFbutton
