export default {
	async acctSelect  () {
		await storeValue('acct_id', select_account.selectedOptionValue); 
		await storeValue('acct_name',select_account.selectedOptionLabel);
		await rpt_title.run()
		storeValue('rpt_title',rpt_title.data)
	},
	myFun2: () => {
		//write code here
	}
}