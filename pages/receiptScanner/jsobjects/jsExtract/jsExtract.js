export default {
	tableData: [],
	async extractData() {
		const response = Midstate_Produce.data.response;
		const maxLength = Math.max(...Object.values(response).map(arr => arr.length));
		const formatData = [];
		for (let index = 0; index < maxLength; index++) {
			const obj = {};
			for (const key in response) {
				obj[key] = response[key][index] || "";
		}
		formatData.push(obj);
		}
		this.tableData = formatData;
		console.log(this.tableData);
	}
};