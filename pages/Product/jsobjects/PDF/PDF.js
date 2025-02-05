export default {
buildPDF() {
// Header Info
	const orientation = 'p'
	const title = 'Product Batches (Last 100): ';
	const name = tbl_Entity.selectedRow.name;
	const descr = tbl_Entity.selectedRow.description;
	var result = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);
	
// 
// Build the column Styles
const columnStyles = { 
   0: { cellWidth: 45, halign: 'center', fontStyle: 'bold', fillColor: '#ffffe6' },
      1: { cellWidth: 80, halign: 'center' },
      2: { cellWidth: 60, halign: 'right' },
      3: { cellWidth: 100, halign: 'center' },
      4: { cellWidth: 80, halign: 'center' },
  };
// Create the table
  result = pdfBundle.genTable(result.doc, entity_Batches.data, columnStyles, result.finalY);
	return result.doc.output("dataurlstring");
}
}

