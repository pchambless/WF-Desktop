export default {
buildPDF() {
// Header Info
	const orientation = 'l'
	const title = 'Ingredient Type: ';
	const name = tbl_Entity.selectedRow.name;
	const descr = 'List of all the Ingredients for this Type';
	var result = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);
	
// 
// Build the column Styles
const columnStyles = { 
   0: { cellWidth: 45, halign: 'center', fontStyle: 'bold' },
      1: { cellWidth: 160, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
      2: { cellWidth: 50, halign: 'right' },
      3: { cellWidth: 60, halign: 'center' },
      4: { cellWidth: 100, halign: 'left' },
      5: { cellWidth: 45, halign: 'right' },
      6: { cellWidth: 70, halign: 'center' },
      7: { cellWidth: 80, halign: 'center' },
  };
// Create the table
  result = pdfBundle.genTable(result.doc, entity_PDF.data, columnStyles, result.finalY);
	return result.doc.output("dataurlstring");
}
}

