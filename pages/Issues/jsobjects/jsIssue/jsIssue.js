export default {
	async logIssue () {
		await issue_send.run()
		await entity_Add.run()

		await issueStatus.setText('** Issue logged. Paul Notified **')
	}
}