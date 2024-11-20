export default {
reportStyles() {
// Storing common report styles
	storeValue('rptStyle', {
		font: 'times',
		theme: 'grid',
		halign: 'left',
	});
// Storing header border info 
storeValue('hdrStyle', { 
		lineWidth: 0.5, 
		lineColor: '#000000', 
		rect: { x: 10, 
					 y: 5, 
					 width: 190, 
					 height: 40,
					}, 
		fillColor: '#dcfce7',
	  rx: 3, // rounded corners 
		ry: 3 // rounded corners 
	});
// Storing logo position
	storeValue('logoStyle', {
		x: 12,
		y: 7,
		width: 15,
		height: 15
});
// Storing account name info
	storeValue('acctStyle', {
		fontSize: 18,
		fontStyle: 'bold',
		textColor: 'red',
		position: { x: 105, y: 13 },
		align: 'center',
	});
// Storing report date info
	storeValue('rptDateStyle', {
		fontSize: 12,
		fontStyle: 'normal',
		textColor: 'black',
		position: { x: 195, y: 13 },
		align: 'right',
	});
},
tableStyles () {
	// Storing common table body styles
	storeValue('bodyStyle', {
		lineWidth: 0.3,
		lineColor: 'black',
		minCellHeight: 0.5,
		cellPadding: 1.1,
		fontSize: 11,
		font: 'times',
	});
// Storing common table header styles
	storeValue('headStyle', {
		lineWidth: 0.3,
		lineColor: 'black',
		fillColor: 'lightblue',
		textColor: 'black',
		fontSize: 12,
		font: 'times',
	});
}
}