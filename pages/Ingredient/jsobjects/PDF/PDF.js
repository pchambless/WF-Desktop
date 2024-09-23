export default {

buildPDF () {
		// Initialize jsPDF
		const doc = jspdf.jsPDF();
		doc.text("",0,0);
		doc.setFont('times')
		this.tblHeader(doc);
		this.tblData(doc)

		return doc.output("dataurlstring")

},
 tblHeader(doc) {
	 // Define the header content
		const acctName = appsmith.store.acct_name;
		const title = "Ingredients Summary: " + sel_Type.selectedOptionLabel + " (as of " + moment().format('YYYY-MM-DD') + ')';
//	 	 doc.addImage(this.wfLogo(), 'JPEG', 10, 5, 20, 20)
		 doc.addImage(appsmith.store.wfLogo, 'JPEG', 10, 5, 20, 20)
      
		 doc.setFontSize(18);
	   doc.setFont(undefined, 'bold')
		 doc.setTextColor("red");
		 doc.text(acctName, 105, 13, null, null, "center"); 
		 doc.setFontSize(14);
		 doc.setTextColor("black");
		 doc.text(title, 105, 22, null, null, "center"); 
		 doc.setLineWidth(.3);
		 doc.rect(10, 5, 190, 20);

	 return doc;
 },
	
tblData(doc) {
// Extract headers dynamically from the first object in the data array
		var tblHead = [Object.keys(ingr_PDF.data[0])];
// Map the data to match the headers
		var tblData = ingr_PDF.data.map(item => Object.values(item));
	  var tblBody = [tblHead].concat(tblData);
		console.log(tblData);
		jspdf_autotable.default(doc, {
    head: tblBody[0],
		body: tblData,
		fillColor: 'green',	font: 'times', theme: 'striped', halign: 'left',
		startY: 30	
		});
		return doc;
},
wfLogo () {
	return 'data:image/png;base64,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'
}
}