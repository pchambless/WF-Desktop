export default {
  buildPDF() {
    // Header Info
    const orientation = 'landscape';
    const title = 'Shopping Receipt: ';
    const name = shop_Select.data[0].shop_name;
    const descr = 'Ingredients Purchased at this Vendor';
    var doc = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);

    // Concat Total to shop_List.data
    const shopList = this.appendTotal(shop_Select.data[0], shop_List.data);

    // Build the column styles
    const columnStyles = { 
      0: { cellWidth: 160, halign: 'left', fontStyle: 'bold' },
      1: { cellWidth: 80, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
      2: { cellWidth: 80, halign: 'right' },
      3: { cellWidth: 160, halign: 'center' },
      4: { cellWidth: 60, halign: 'right' }
    };

    // Custom style callback to make cells bold based on criteria
    console.log('Before styleCallback.');
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
    doc = pdfBundle.genTable(doc, shopList, columnStyles, 91, styleCallback);

    return doc.output("dataurlstring");
  },

  // Function to append shop_Select to shop_List
  appendTotal(shop_Select, shop_List) {
    // Create a new row with the specific columns from shop_Select
    const newRow = {
      Ingredient: '',
      Batch: "",
      "Lot Number": "",
      Detail: "TOTAL",
      Amount: shop_Select.total_amount
    };

    // Log before modifying
    console.log('shop_List before push:', JSON.stringify(shop_List, null, 2));
    console.log('newRow:', JSON.stringify(newRow, null, 2));

    // Append the new row to shop_List
    shop_List.push(newRow);

    // Log after modifying
    console.log('shop_List after push:', JSON.stringify(shop_List, null, 2));

    return shop_List;
  }
};
