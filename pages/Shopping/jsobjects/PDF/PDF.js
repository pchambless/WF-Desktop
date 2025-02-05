export default {
  buildPDF() {
    // Header Info
    const orientation = 'landscape';
    const title = 'Shopping Receipt for: ';
    const name = shop_Select.data[0].shop_name;
    const descr = 'Ingredients Purchased at this Vendor/Store';
    var result = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);

    // Build the column styles
    const columnStyles = { 
			0: { cellWidth: 80, halign: 'center'},
      1: { cellWidth: 160, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6'  },
      2: { cellWidth: 100, halign: 'center' },
      3: { cellWidth: 160, halign: 'center' },
      4: { cellWidth: 60, halign: 'right' }
    };

    // Custom style callback to make cells bold based on criteria
    const styleCallback = data => {
			console.log('In styleCallback.');
      if (data.column.index === 3 && data.cell.text[0] === 'TOTAL') {
        console.log('In styleCallback -> Row: ', data.row.index, 'Column: ', data.column.index, ' Text: ', data.cell.text[0]);
        data.cell.styles.fontStyle = 'bold'; // Apply bold to cell 3
        if (data.table.body[data.row.index]) {
          data.table.body[data.row.index].cells[4].styles.fontStyle = 'bold';
					data.table.body[data.row.index].cells[4].styles.fillColor = '#ffffe6';
        }
      }
    };

// Create the table with the style callback
    result = pdfBundle.genTable(result.doc, appsmith.store.shopList, columnStyles,    result.finalY, styleCallback);

    return result.doc.output("dataurlstring");
  },
};
