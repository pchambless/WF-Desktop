export default {
	async acctUserInsert () {
		await accountUser_insert.run()
		accountUser_list.run()
		accountUser_choice.run()
	},
	async acctUserDelete () {
		await accountUser_delete.run()
		accountUser_list.run()
		accountUser_choice.run()
	}
}