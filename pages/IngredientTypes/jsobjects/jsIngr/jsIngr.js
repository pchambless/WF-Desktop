export default {
editModeRun: async (mode) => {
	switch(mode) {
		case 'Add':
			await ingr_Add.run();
			break;
		case 'Edit':
			await ingr_Edit.run();
			break;
		case 'Delete':
			await ingr_Delete.run();
			break;
		default:
			console.log("Invalid mode");
		}
	await ingr_List.run()
}
	
}
