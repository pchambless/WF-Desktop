export default {
	listStoreItems: () => {
		return Object.keys(appsmith.store).map(key => ({
			key: key,
			value: appsmith.store[key]
		}));
	}
};