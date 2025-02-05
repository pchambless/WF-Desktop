export default {
buildPDF() {
// Header Info
	const orientation = 'p'
	const title = 'Recipe: ';
	const name = sel_prod.selectedOptionLabel;
	const descr = '';
	var result = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);
	
// 
// Build the column Styles
const columnStyles = { 
   0: { cellWidth: 45, halign: 'center', fontStyle: 'bold' },
      1: { cellWidth: 140, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
      2: { cellWidth: 70, halign: 'center' },
      3: { cellWidth: 160, halign: 'left' },
  };
// Create the table
  result = pdfBundle.genTable(result.doc, entity_PDF.data, columnStyles, result.finalY);
	return result.doc.output("dataurlstring");
}
}