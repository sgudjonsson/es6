export class AccountsService {
	constructor() {
		this.accounts = [
			{ accountId: 42, name: "Account 1" },
			{ accountId: 69, name: "Account 2" },
			{ accountId: 7913, name: "Account 3" },
		]
	}

	getWithdrawalAccounts() {
		return this.accounts;
	}

	getDefaultAccountId() {
		return 42;
	}
}

export class OverviewController {
	constructor(accountsService) {
		console.log({
			"Accounts": accountsService.getWithdrawalAccounts(),
			"DefaultAccountId": accountsService.getDefaultAccountId()
		});
	}
}

export class NotImportant {
	constructor() {
		
	}
}