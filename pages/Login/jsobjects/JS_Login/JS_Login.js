export default {
	savePage : () => {
		storeValue('pageName', appsmith.URL.pathname)
		storeValue('appName', 'whatsfresh')
		storeValue('email', appsmith.user.email)
	},
	login_func : async () => {
		//				showAlert("Start");
		const md = forge.md.md5.create();
		md.update(login_password.text);
		storeValue('hash', md.digest().toHex());
		spUser_login.run(
			//onsucess function here
			()=> {
				storeValue('user_id', spUser_login.data && spUser_login.data[0].user_id );
				storeValue('acct_id', spUser_login.data && spUser_login.data[0].acct_id );
				storeValue('acct_name', spUser_login.data && spUser_login.data[0].acct_name );
				storeValue('procLocation', spUser_login.data && spUser_login.data[0].procLocation); 
				storeValue('roleID',spUser_login.data && spUser_login.data[0].roleID)
				storeValue('unCloak','true');
				navigateTo('Dashboard', {});
			},
			//you can have the onerror function next
			()=> {
				showAlert('Disable Pages');
				storeValue('unCloak','false');
			}
		);
	},
	newPwdFunc : () => {
		const md = forge.md.md5.create();
		md.update(newPassword.text);
		storeValue('hash', md.digest().toHex());
		updAppsmithPassword.run();

	}
}