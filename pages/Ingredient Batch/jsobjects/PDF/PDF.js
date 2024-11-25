export default {
  buildPDF() {
    // Header Info
    const orientation = 'p';
    const title = 'Ingredient Tracing: ';
    const name = sel_ingr.selectedOptionLabel;
    const descr = 'Product Batches created using this Ingredient Batch';
    let doc = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);
// Generate the Ingredient Batch Info table
    const selectedColumns = [
      'ingr_btch_nbr',
      'purch_date', 
      'vndr_name', 
      'brnd_name', 
      'purch_dtl',
      'purch_amt'
    ];
    const columnRenames = { // Define the column renames
      'ingr_btch_nbr': 'Ingredient Batch',
      'purch_date': 'Purchase Date',
      'vndr_name': 'Vendor Name',
      'brnd_name': 'Brand Name',
      'purch_dtl': 'Purchase Detail',
      'purch_amt': 'Purchase Amount'
    };

 // Get the pivoted data with selected columns and renames
    const hdrBatch = this.pivotData(entity_Trace.data[0], selectedColumns, columnRenames);
 // Column Styles for Batch Info
    const hdrStyles = { 
      0: { cellWidth: 100, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
      1: { cellWidth: 150, halign: 'left', fontStyle: 'bold' },
    };
		let result = []
		let startY = 91
		
// Create Ingredient Batch info
    result = pdfBundle.genTable(doc, hdrBatch, hdrStyles, startY);
		console.log('past 1st Table', result.finalY)
		
// Batches Header
		doc = result.doc
		startY = result.finalY + 35
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor('red');
    doc.text('Product Batches', 70, startY, null, null, 'center');

    const columnStyles = { 
      0: { cellWidth: 70, halign: 'center', fontStyle: 'bold', fillColor: '#ffffe6' },
			1: { cellWidth: 200, halign: 'left', fontStyle: 'bold' },
      2: { cellWidth: 70, halign: 'center' },
      3: { cellWidth: 60, halign: 'center' },
      4: { cellWidth: 100, halign: 'center' },
    };

    // Create the second table using the updated finalY position
    result = pdfBundle.genTable(result.doc, pdfTrace.data, columnStyles, startY +  7); // Add some padding

    return result.doc.output("dataurlstring");
  },

// Ingredient Batch Info Table
tblIngrBtch(doc, startY) {

  },

  // Product Batches Table
  tblProdBtch() {
    // Implement this function if needed
  },

  // Function to Pivot the data with selected columns and rename them
  pivotData(item, selectedColumns, columnRenames) {
    const result = [];
    for (const [key, value] of Object.entries(item)) {
      if (selectedColumns.includes(key)) {
        const newKey = columnRenames[key] || key;
        result.push({ Property: newKey, Value: value });
      }
    }
    return result;
  }
}
