export default {
	async isOwner () {
		await acct_Owner.run()
		await user_List.run()
	},
	async userAdd () {
		await user_Add.run()
		await user_List.run()
		await user_Choice.run()
	},
	async userDelete () {
		await user_Delete.run()
		await user_List.run()
		await user_Choice.run()
	}
}