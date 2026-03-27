export default {
	account_id: async () => {
  await storeValue("setValsBody", [{ param_name: "account_id", param_val: SelAccount.selectedOptionValue }]);
  await n8nvals.setVals();
}
}