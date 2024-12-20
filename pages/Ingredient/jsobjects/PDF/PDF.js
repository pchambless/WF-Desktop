export default {
pdfIngrInfo () {
// Header Info
	const orientation = 'p'
	const title = 'Ingredient Type: ';
	const name = sel_Type.selectedOptionLabel;
	const descr = 'This is a Summary of the Ingredient Batches for the selected Ingredient Type';
	var doc = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);	
	
	// Build the column Styles
const columnStyles = { 
   0: { cellWidth: 45, halign: 'center', fontStyle: 'normal' },
      1: { cellWidth: 140, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
      2: { cellWidth: 60, halign: 'center' },
      3: { cellWidth: 60, halign: 'center' },
      4: { cellWidth: 55, halign: 'right' },
      5: { cellWidth: 50, halign: 'center' },
      6: { cellWidth: 45, halign: 'center' },
      7: { cellWidth: 45, halign: 'center' },
	    8: { cellWidth: 45, halign: 'center' },
  };
// Create the table
  let result = pdfBundle.genTable(doc, pdfIngrSumry.data, columnStyles, 91);
	return result.doc.output("dataurlstring");
},
pdfBatches () {
	// Header Info
	const orientation = 'l' // 'l': landscape, 'p': portrait
	const title = 'Ingredient Batches: ';
	const name = tbl_Entity.selectedRow.name;
	const descr = tbl_Entity.selectedRow.description;
	var doc = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);	
	
	// Build the column Styles
const columnStyles = { 
	0: { cellWidth: 80, halign: 'center', fontStyle: 'bold', fillColor: '#ffffe6' },
	1: { cellWidth: 60, halign: 'left', fontStyle: 'normal' },
	2: { cellWidth: 120, halign: 'center' },
	3: { cellWidth: 120, halign: 'center' },
	4: { cellWidth: 100, halign: 'center' },
	5: { cellWidth: 140, halign: 'center' },
	6: { cellWidth: 50, halign: 'center' },
	7: { cellWidth: 0, halign: 'center' },
  };
// Create the table
  let result = pdfBundle.genTable(doc, pdfIngrBtch.data, columnStyles, 91);
	return result.doc.output("dataurlstring");
},
pdfRecipes() {
  // Header Info
  const orientation = 'portrait';
  const title = 'Ingredient: ';
  const name = tbl_Entity.selectedRow.name;
  const descr = 'This ingredient is used in these recipes';
  var doc = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);
  
  // Build the column styles
  const columnStyles = {
    0: { cellWidth: 250, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
    1: { cellWidth: 80, halign: 'left', fontStyle: 'normal' }
  };
// Create the table
  let result = pdfBundle.genTable(doc, pdfRcpe.data, columnStyles, 91);
	return result.doc.output("dataurlstring");

}
}

