/* RainLoop Webmail (c) RainLoop Team | Licensed under CC BY-NC-SA 3.0 */

(function () {

	'use strict';

	var
		_ = require('_'),

		AbstractRemoteStorage = require('Storage/AbstractRemote')
	;

	/**
	 * @constructor
	 * @extends AbstractRemoteStorage
	 */
	function RemoteAdminStorage()
	{
		AbstractRemoteStorage.call(this);

		this.oRequests = {};
	}

	_.extend(RemoteAdminStorage.prototype, AbstractRemoteStorage.prototype);

	/**
	 * @param {?Function} fCallback
	 * @param {string} sLogin
	 * @param {string} sPassword
	 */
	RemoteAdminStorage.prototype.adminLogin = function (fCallback, sLogin, sPassword)
	{
		this.defaultRequest(fCallback, 'AdminLogin', {
			'Login': sLogin,
			'Password': sPassword
		});
	};

	/**
	 * @param {?Function} fCallback
	 */
	RemoteAdminStorage.prototype.adminLogout = function (fCallback)
	{
		this.defaultRequest(fCallback, 'AdminLogout');
	};

	/**
	 * @param {?Function} fCallback
	 * @param {?} oData
	 */
	RemoteAdminStorage.prototype.saveAdminConfig = function (fCallback, oData)
	{
		this.defaultRequest(fCallback, 'AdminSettingsUpdate', oData);
	};

	/**
	 * @param {?Function} fCallback
	 */
	RemoteAdminStorage.prototype.domainList = function (fCallback)
	{
		this.defaultRequest(fCallback, 'AdminDomainList');
	};

	/**
	 * @param {?Function} fCallback
	 */
	RemoteAdminStorage.prototype.pluginList = function (fCallback)
	{
		this.defaultRequest(fCallback, 'AdminPluginList');
	};

	/**
	 * @param {?Function} fCallback
	 */
	RemoteAdminStorage.prototype.packagesList = function (fCallback)
	{
		this.defaultRequest(fCallback, 'AdminPackagesList');
	};

	/**
	 * @param {?Function} fCallback
	 */
	RemoteAdminStorage.prototype.coreData = function (fCallback)
	{
		this.defaultRequest(fCallback, 'AdminCoreData');
	};

	/**
	 * @param {?Function} fCallback
	 */
	RemoteAdminStorage.prototype.updateCoreData = function (fCallback)
	{
		this.defaultRequest(fCallback, 'AdminUpdateCoreData', {}, 90000);
	};

	/**
	 * @param {?Function} fCallback
	 * @param {Object} oPackage
	 */
	RemoteAdminStorage.prototype.packageInstall = function (fCallback, oPackage)
	{
		this.defaultRequest(fCallback, 'AdminPackageInstall', {
			'Id': oPackage.id,
			'Type': oPackage.type,
			'File': oPackage.file
		}, 60000);
	};

	/**
	 * @param {?Function} fCallback
	 * @param {Object} oPackage
	 */
	RemoteAdminStorage.prototype.packageDelete = function (fCallback, oPackage)
	{
		this.defaultRequest(fCallback, 'AdminPackageDelete', {
			'Id': oPackage.id
		});
	};

	/**
	 * @param {?Function} fCallback
	 * @param {string} sName
	 */
	RemoteAdminStorage.prototype.domain = function (fCallback, sName)
	{
		this.defaultRequest(fCallback, 'AdminDomainLoad', {
			'Name': sName
		});
	};

	/**
	 * @param {?Function} fCallback
	 * @param {string} sName
	 */
	RemoteAdminStorage.prototype.plugin = function (fCallback, sName)
	{
		this.defaultRequest(fCallback, 'AdminPluginLoad', {
			'Name': sName
		});
	};

	/**
	 * @param {?Function} fCallback
	 * @param {string} sName
	 */
	RemoteAdminStorage.prototype.domainDelete = function (fCallback, sName)
	{
		this.defaultRequest(fCallback, 'AdminDomainDelete', {
			'Name': sName
		});
	};

	/**
	 * @param {?Function} fCallback
	 * @param {string} sName
	 * @param {boolean} bDisabled
	 */
	RemoteAdminStorage.prototype.domainDisable = function (fCallback, sName, bDisabled)
	{
		return this.defaultRequest(fCallback, 'AdminDomainDisable', {
			'Name': sName,
			'Disabled': !!bDisabled ? '1' : '0'
		});
	};

	/**
	 * @param {?Function} fCallback
	 * @param {Object} oConfig
	 */
	RemoteAdminStorage.prototype.pluginSettingsUpdate = function (fCallback, oConfig)
	{
		return this.defaultRequest(fCallback, 'AdminPluginSettingsUpdate', oConfig);
	};

	/**
	 * @param {?Function} fCallback
	 * @param {boolean} bForce
	 */
	RemoteAdminStorage.prototype.licensing = function (fCallback, bForce)
	{
		return this.defaultRequest(fCallback, 'AdminLicensing', {
			'Force' : bForce ? '1' : '0'
		});
	};

	/**
	 * @param {?Function} fCallback
	 * @param {string} sDomain
	 * @param {string} sKey
	 */
	RemoteAdminStorage.prototype.licensingActivate = function (fCallback, sDomain, sKey)
	{
		return this.defaultRequest(fCallback, 'AdminLicensingActivate', {
			'Domain' : sDomain,
			'Key' : sKey
		});
	};

	/**
	 * @param {?Function} fCallback
	 * @param {string} sName
	 * @param {boolean} bDisabled
	 */
	RemoteAdminStorage.prototype.pluginDisable = function (fCallback, sName, bDisabled)
	{
		return this.defaultRequest(fCallback, 'AdminPluginDisable', {
			'Name': sName,
			'Disabled': !!bDisabled ? '1' : '0'
		});
	};

	RemoteAdminStorage.prototype.createOrUpdateDomain = function (fCallback,
		bCreate, sName, sIncHost, iIncPort, sIncSecure, bIncVerifySsl, bIncShortLogin,
		sOutHost, iOutPort, sOutSecure, bOutShortLogin, bOutVerifySsl, bOutAuth, sWhiteList)
	{
		this.defaultRequest(fCallback, 'AdminDomainSave', {
			'Create': bCreate ? '1' : '0',
			'Name': sName,
			'IncHost': sIncHost,
			'IncPort': iIncPort,
			'IncSecure': sIncSecure,
			'IncVerifySsl': bIncVerifySsl ? '1' : '0',
			'IncShortLogin': bIncShortLogin ? '1' : '0',
			'OutHost': sOutHost,
			'OutPort': iOutPort,
			'OutSecure': sOutSecure,
			'OutVerifySsl': bOutVerifySsl ? '1' : '0',
			'OutShortLogin': bOutShortLogin ? '1' : '0',
			'OutAuth': bOutAuth ? '1' : '0',
			'WhiteList': sWhiteList
		});
	};

	RemoteAdminStorage.prototype.testConnectionForDomain = function (fCallback, sName,
		sIncHost, iIncPort, sIncSecure, bIncVerifySsl,
		sOutHost, iOutPort, sOutSecure, bOutVerifySsl, bOutAuth)
	{
		this.defaultRequest(fCallback, 'AdminDomainTest', {
			'Name': sName,
			'IncHost': sIncHost,
			'IncPort': iIncPort,
			'IncSecure': sIncSecure,
			'IncVerifySsl': bIncVerifySsl ? '1' : '0',
			'OutHost': sOutHost,
			'OutPort': iOutPort,
			'OutSecure': sOutSecure,
			'OutVerifySsl': bOutVerifySsl ? '1' : '0',
			'OutAuth': bOutAuth ? '1' : '0'
		});
	};

	/**
	 * @param {?Function} fCallback
	 * @param {?} oData
	 */
	RemoteAdminStorage.prototype.testContacts = function (fCallback, oData)
	{
		this.defaultRequest(fCallback, 'AdminContactsTest', oData);
	};

	/**
	 * @param {?Function} fCallback
	 * @param {?} oData
	 */
	RemoteAdminStorage.prototype.saveNewAdminPassword = function (fCallback, oData)
	{
		this.defaultRequest(fCallback, 'AdminPasswordUpdate', oData);
	};

	/**
	 * @param {?Function} fCallback
	 */
	RemoteAdminStorage.prototype.adminPing = function (fCallback)
	{
		this.defaultRequest(fCallback, 'AdminPing');
	};

	module.exports = new RemoteAdminStorage();

}());