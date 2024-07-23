export default {
	async acctSelect  () {
		await storeValue('acct_id', select_account.selectedOptionValue); 
		await storeValue('acct_name',select_account.selectedOptionLabel);
		await acct_Select.run()
		await rpt_title.run()
		await user_List.run()
		await user_Choice.run()
		await storeValue('isOwner', acct_Select.data[0].is_owner)
		await storeValue('rpt_title',rpt_title.data)
		
	},
	makeHelp: () => {
		help.run()
		storeValue('help',help.data)
		console.log(appsmith.store.help)
	}
}