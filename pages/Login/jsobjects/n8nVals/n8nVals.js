export default {
  setVals: async () => {
    const body = {
      email: appsmith.user.email,
      vals: appsmith.store.setValsBody
    };
    const response = await fetch("https://n8n.whatsfresh.app/webhook/setvals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    return await response.json();
  },
	clearVals: async () => {
    const body = {
      email: appsmith.user.email,
      params: appsmith.store.setClearsBody
    };
    const response = await fetch("https://n8n.whatsfresh.app/webhook/clearvals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    return await response.json();
  }
}


