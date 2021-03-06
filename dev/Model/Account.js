
(function () {

	'use strict';

	var
		_ = require('_'),
		ko = require('ko'),

		Utils = require('Common/Utils'),

		AbstractModel = require('Knoin/AbstractModel')
	;

	/**
	 * @constructor
	 *
	 * @param {string} sEmail
	 * @param {boolean=} bCanBeDelete = true
	 */
	function AccountModel(sEmail, bCanBeDelete)
	{
		AbstractModel.call(this, 'AccountModel');

		this.email = sEmail;

		this.deleteAccess = ko.observable(false);
		this.canBeDalete = ko.observable(Utils.isUnd(bCanBeDelete) ? true : !!bCanBeDelete);
	}

	_.extend(AccountModel.prototype, AbstractModel.prototype);

	/**
	 * @type {string}
	 */
	AccountModel.prototype.email = '';

	/**
	 * @return {string}
	 */
	AccountModel.prototype.changeAccountLink = function ()
	{
		return require('Common/Links').change(this.email);
	};

	module.exports = AccountModel;

}());