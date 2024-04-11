ZCRM.UsersTerritory = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		TransferActionResponse : class{
			constructor(){

			}


		},

		ValidationHandler : class{
			constructor(){

			}


		},

		TransferActionHandler : class{
			constructor(){

			}


		},

		ValidationGroup : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		TransferToUser : class{
			constructor(){

				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		Territory : class{
			constructor(){

				this.id=null;
				this.manager=null;
				this.reportingTo=null;
				this.name=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the manager
			 * @returns {Manager} An instance of Manager
			 */
			getManager()	{
				return this.manager;

			}

			/**
			 * The method to set the value to manager
			 * @param {Manager} manager An instance of Manager
			 */
			setManager(manager)	{
				if((manager != null) && (!(manager instanceof ZCRM.UsersTerritory.Model.Manager))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: manager EXPECTED TYPE: Manager", null, null);
				}
				this.manager = manager;
				this.keyModified.set("Manager", 1);

			}

			/**
			 * The method to get the reportingTo
			 * @returns {Manager} An instance of Manager
			 */
			getReportingTo()	{
				return this.reportingTo;

			}

			/**
			 * The method to set the value to reportingTo
			 * @param {Manager} reportingTo An instance of Manager
			 */
			setReportingTo(reportingTo)	{
				if((reportingTo != null) && (!(reportingTo instanceof ZCRM.UsersTerritory.Model.Manager))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reportingTo EXPECTED TYPE: Manager", null, null);
				}
				this.reportingTo = reportingTo;
				this.keyModified.set("Reporting_To", 1);

			}

			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.name = name;
				this.keyModified.set("Name", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		Info : class{
			constructor(){

				this.count=null;
				this.page=null;
				this.perPage=null;
				this.moreRecords=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the count
			 * @returns {Integer} An Integer representing the count
			 */
			getCount()	{
				return this.count;

			}

			/**
			 * The method to set the value to count
			 * @param {Integer} count An Integer
			 */
			setCount(count)	{
				if((count != null) && (!(Object.prototype.toString.call(count) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: count EXPECTED TYPE: Integer", null, null);
				}
				this.count = count;
				this.keyModified.set("count", 1);

			}

			/**
			 * The method to get the page
			 * @returns {Integer} An Integer representing the page
			 */
			getPage()	{
				return this.page;

			}

			/**
			 * The method to set the value to page
			 * @param {Integer} page An Integer
			 */
			setPage(page)	{
				if((page != null) && (!(Object.prototype.toString.call(page) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: page EXPECTED TYPE: Integer", null, null);
				}
				this.page = page;
				this.keyModified.set("page", 1);

			}

			/**
			 * The method to get the perPage
			 * @returns {Integer} An Integer representing the perPage
			 */
			getPerPage()	{
				return this.perPage;

			}

			/**
			 * The method to set the value to perPage
			 * @param {Integer} perPage An Integer
			 */
			setPerPage(perPage)	{
				if((perPage != null) && (!(Object.prototype.toString.call(perPage) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: perPage EXPECTED TYPE: Integer", null, null);
				}
				this.perPage = perPage;
				this.keyModified.set("per_page", 1);

			}

			/**
			 * The method to get the moreRecords
			 * @returns {Boolean} A Boolean representing the moreRecords
			 */
			getMoreRecords()	{
				return this.moreRecords;

			}

			/**
			 * The method to set the value to moreRecords
			 * @param {Boolean} moreRecords A Boolean
			 */
			setMoreRecords(moreRecords)	{
				if((moreRecords != null) && (!(Object.prototype.toString.call(moreRecords) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moreRecords EXPECTED TYPE: Boolean", null, null);
				}
				this.moreRecords = moreRecords;
				this.keyModified.set("more_records", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		BodyWrapper : class{
			constructor(){

				this.territories=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the territories
			 * @returns {List} An Array representing the territories
			 */
			getTerritories()	{
				return this.territories;

			}

			/**
			 * The method to set the value to territories
			 * @param {List} territories An Array
			 */
			setTerritories(territories)	{
				if((territories != null) && (!(Object.prototype.toString.call(territories) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territories EXPECTED TYPE: Array", null, null);
				}
				this.territories = territories;
				this.keyModified.set("territories", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		Manager : class{
			constructor(){

				this.name=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.name = name;
				this.keyModified.set("Name", 1);

			}

			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		Validation : class{
			constructor(){

				this.id=null;
				this.name=null;
				this.records=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.name = name;
				this.keyModified.set("Name", 1);

			}

			/**
			 * The method to get the records
			 * @returns {Boolean} A Boolean representing the records
			 */
			getRecords()	{
				return this.records;

			}

			/**
			 * The method to set the value to records
			 * @param {Boolean} records A Boolean
			 */
			setRecords(records)	{
				if((records != null) && (!(Object.prototype.toString.call(records) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: records EXPECTED TYPE: Boolean", null, null);
				}
				this.records = records;
				this.keyModified.set("records", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		ResponseWrapper : class{
			constructor(){

				this.territories=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the territories
			 * @returns {List} An Array representing the territories
			 */
			getTerritories()	{
				return this.territories;

			}

			/**
			 * The method to set the value to territories
			 * @param {List} territories An Array
			 */
			setTerritories(territories)	{
				if((territories != null) && (!(Object.prototype.toString.call(territories) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territories EXPECTED TYPE: Array", null, null);
				}
				this.territories = territories;
				this.keyModified.set("territories", 1);

			}

			/**
			 * The method to get the info
			 * @returns {Info} An instance of Info
			 */
			getInfo()	{
				return this.info;

			}

			/**
			 * The method to set the value to info
			 * @param {Info} info An instance of Info
			 */
			setInfo(info)	{
				if((info != null) && (!(info instanceof ZCRM.UsersTerritory.Model.Info))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: info EXPECTED TYPE: Info", null, null);
				}
				this.info = info;
				this.keyModified.set("info", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		ActionWrappe : class{
			constructor(){

				this.transferAndDelink=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the transferAndDelink
			 * @returns {List} An Array representing the transferAndDelink
			 */
			getTransferAndDelink()	{
				return this.transferAndDelink;

			}

			/**
			 * The method to set the value to transferAndDelink
			 * @param {List} transferAndDelink An Array
			 */
			setTransferAndDelink(transferAndDelink)	{
				if((transferAndDelink != null) && (!(Object.prototype.toString.call(transferAndDelink) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transferAndDelink EXPECTED TYPE: Array", null, null);
				}
				this.transferAndDelink = transferAndDelink;
				this.keyModified.set("transfer_and_delink", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		APIException : class{
			constructor(){

				this.code=null;
				this.details=null;
				this.message=null;
				this.status=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the code
			 * @returns {Choice} An instance of Choice
			 */
			getCode()	{
				return this.code;

			}

			/**
			 * The method to set the value to code
			 * @param {Choice} code An instance of Choice
			 */
			setCode(code)	{
				if((code != null) && (!(code instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: code EXPECTED TYPE: Choice", null, null);
				}
				this.code = code;
				this.keyModified.set("code", 1);

			}

			/**
			 * The method to get the details
			 * @returns {Map} A Map representing the details
			 */
			getDetails()	{
				return this.details;

			}

			/**
			 * The method to set the value to details
			 * @param {Map} details A Map
			 */
			setDetails(details)	{
				if((details != null) && (!(Object.prototype.toString.call(details) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Map", null, null);
				}
				this.details = details;
				this.keyModified.set("details", 1);

			}

			/**
			 * The method to get the message
			 * @returns {String} A String representing the message
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {String} message A String
			 */
			setMessage(message)	{
				if((message != null) && (!(Object.prototype.toString.call(message) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: String", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the status
			 * @returns {Choice} An instance of Choice
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {Choice} status An instance of Choice
			 */
			setStatus(status)	{
				if((status != null) && (!(status instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		ActionWrapper : class{
			constructor(){

				this.transferAndDelink=null;
				this.keyModified=new Map();
				this.territories=null;
			}



			/**
			 * The method to get the transferAndDelink
			 * @returns {List} An Array representing the transferAndDelink
			 */
			getTransferAndDelink()	{
				return this.transferAndDelink;

			}

			/**
			 * The method to set the value to transferAndDelink
			 * @param {List} transferAndDelink An Array
			 */
			setTransferAndDelink(transferAndDelink)	{
				if((transferAndDelink != null) && (!(Object.prototype.toString.call(transferAndDelink) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transferAndDelink EXPECTED TYPE: Array", null, null);
				}
				this.transferAndDelink = transferAndDelink;
				this.keyModified.set("transfer_and_delink", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}

			/**
			 * The method to get the territories
			 * @returns {List} An Array representing the territories
			 */
			getTerritories()	{
				return this.territories;

			}

			/**
			 * The method to set the value to territories
			 * @param {List} territories An Array
			 */
			setTerritories(territories)	{
				if((territories != null) && (!(Object.prototype.toString.call(territories) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territories EXPECTED TYPE: Array", null, null);
				}
				this.territories = territories;
				this.keyModified.set("territories", 1);

			}
		},

		TransferActionWrapper : class{
			constructor(){

				this.transferAndDelink=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the transferAndDelink
			 * @returns {List} An Array representing the transferAndDelink
			 */
			getTransferAndDelink()	{
				return this.transferAndDelink;

			}

			/**
			 * The method to set the value to transferAndDelink
			 * @param {List} transferAndDelink An Array
			 */
			setTransferAndDelink(transferAndDelink)	{
				if((transferAndDelink != null) && (!(Object.prototype.toString.call(transferAndDelink) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transferAndDelink EXPECTED TYPE: Array", null, null);
				}
				this.transferAndDelink = transferAndDelink;
				this.keyModified.set("transfer_and_delink", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		BulkValidation : class{
			constructor(){

				this.alert=null;
				this.assignment=null;
				this.criteria=null;
				this.name=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the alert
			 * @returns {Boolean} A Boolean representing the alert
			 */
			getAlert()	{
				return this.alert;

			}

			/**
			 * The method to set the value to alert
			 * @param {Boolean} alert A Boolean
			 */
			setAlert(alert)	{
				if((alert != null) && (!(Object.prototype.toString.call(alert) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: alert EXPECTED TYPE: Boolean", null, null);
				}
				this.alert = alert;
				this.keyModified.set("alert", 1);

			}

			/**
			 * The method to get the assignment
			 * @returns {Boolean} A Boolean representing the assignment
			 */
			getAssignment()	{
				return this.assignment;

			}

			/**
			 * The method to set the value to assignment
			 * @param {Boolean} assignment A Boolean
			 */
			setAssignment(assignment)	{
				if((assignment != null) && (!(Object.prototype.toString.call(assignment) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignment EXPECTED TYPE: Boolean", null, null);
				}
				this.assignment = assignment;
				this.keyModified.set("assignment", 1);

			}

			/**
			 * The method to get the criteria
			 * @returns {Boolean} A Boolean representing the criteria
			 */
			getCriteria()	{
				return this.criteria;

			}

			/**
			 * The method to set the value to criteria
			 * @param {Boolean} criteria A Boolean
			 */
			setCriteria(criteria)	{
				if((criteria != null) && (!(Object.prototype.toString.call(criteria) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Boolean", null, null);
				}
				this.criteria = criteria;
				this.keyModified.set("criteria", 1);

			}

			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.name = name;
				this.keyModified.set("name", 1);

			}

			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		TransferAndDelink : class{
			constructor(){

				this.id=null;
				this.transferToUser=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the transferToUser
			 * @returns {TransferToUser} An instance of TransferToUser
			 */
			getTransferToUser()	{
				return this.transferToUser;

			}

			/**
			 * The method to set the value to transferToUser
			 * @param {TransferToUser} transferToUser An instance of TransferToUser
			 */
			setTransferToUser(transferToUser)	{
				if((transferToUser != null) && (!(transferToUser instanceof ZCRM.UsersTerritory.Model.TransferToUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transferToUser EXPECTED TYPE: TransferToUser", null, null);
				}
				this.transferToUser = transferToUser;
				this.keyModified.set("transfer_to_user", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		TransferWrapper : class{
			constructor(){

				this.transferAndDelink=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the transferAndDelink
			 * @returns {List} An Array representing the transferAndDelink
			 */
			getTransferAndDelink()	{
				return this.transferAndDelink;

			}

			/**
			 * The method to set the value to transferAndDelink
			 * @param {List} transferAndDelink An Array
			 */
			setTransferAndDelink(transferAndDelink)	{
				if((transferAndDelink != null) && (!(Object.prototype.toString.call(transferAndDelink) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transferAndDelink EXPECTED TYPE: Array", null, null);
				}
				this.transferAndDelink = transferAndDelink;
				this.keyModified.set("transfer_and_delink", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		ValidationWrapper : class{
			constructor(){

				this.validateBeforeTransfer=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the validateBeforeTransfer
			 * @returns {List} An Array representing the validateBeforeTransfer
			 */
			getValidateBeforeTransfer()	{
				return this.validateBeforeTransfer;

			}

			/**
			 * The method to set the value to validateBeforeTransfer
			 * @param {List} validateBeforeTransfer An Array
			 */
			setValidateBeforeTransfer(validateBeforeTransfer)	{
				if((validateBeforeTransfer != null) && (!(Object.prototype.toString.call(validateBeforeTransfer) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: validateBeforeTransfer EXPECTED TYPE: Array", null, null);
				}
				this.validateBeforeTransfer = validateBeforeTransfer;
				this.keyModified.set("validate_before_transfer", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		SuccessResponse : class{
			constructor(){

				this.code=null;
				this.message=null;
				this.details=null;
				this.status=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the code
			 * @returns {Choice} An instance of Choice
			 */
			getCode()	{
				return this.code;

			}

			/**
			 * The method to set the value to code
			 * @param {Choice} code An instance of Choice
			 */
			setCode(code)	{
				if((code != null) && (!(code instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: code EXPECTED TYPE: Choice", null, null);
				}
				this.code = code;
				this.keyModified.set("code", 1);

			}

			/**
			 * The method to get the message
			 * @returns {String} A String representing the message
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {String} message A String
			 */
			setMessage(message)	{
				if((message != null) && (!(Object.prototype.toString.call(message) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: String", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the details
			 * @returns {Map} A Map representing the details
			 */
			getDetails()	{
				return this.details;

			}

			/**
			 * The method to set the value to details
			 * @param {Map} details A Map
			 */
			setDetails(details)	{
				if((details != null) && (!(Object.prototype.toString.call(details) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Map", null, null);
				}
				this.details = details;
				this.keyModified.set("details", 1);

			}

			/**
			 * The method to get the status
			 * @returns {Choice} An instance of Choice
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {Choice} status An instance of Choice
			 */
			setStatus(status)	{
				if((status != null) && (!(status instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		}
	},
	Operations : class {


		/**
		 * Creates an instance of UsersTerritoriesOperations with the given parameters
		 * @param {Long} user A BigInt
		 */
		constructor(user){
			if((!(Object.prototype.toString.call(user) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: BigInt", null, null);
			}
						this.user = user;

		}

		/**
		 * The method to get territories of user
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getTerritoriesOfUser(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v6/users/");
			apiPath = apiPath.concat(this.user.toString());
			apiPath = apiPath.concat("/territories");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("UsersTerritory.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to associate territories to user
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async associateTerritoriesToUser(request){
			if((request != null) && (!(request instanceof ZCRM.UsersTerritory.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v6/users/");
			apiPath = apiPath.concat(this.user.toString());
			apiPath = apiPath.concat("/territories");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("UsersTerritory.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get territory of user
		 * @param {Long} territory A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getTerritoryOfUser(territory){
			if((!(Object.prototype.toString.call(territory) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v6/users/");
			apiPath = apiPath.concat(this.user.toString());
			apiPath = apiPath.concat("/territories/");
			apiPath = apiPath.concat(territory.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("UsersTerritory.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to validate before transfer for all territories
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async validateBeforeTransferForAllTerritories(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v6/users/");
			apiPath = apiPath.concat(this.user.toString());
			apiPath = apiPath.concat("/territories/actions/validate_before_transfer");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
			return handlerInstance.apiCall("UsersTerritory.Model.ValidationHandler", "application/json");

		}

		/**
		 * The method to validate before transfer
		 * @param {Long} territory A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async validateBeforeTransfer(territory){
			if((!(Object.prototype.toString.call(territory) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v6/users/");
			apiPath = apiPath.concat(this.user.toString());
			apiPath = apiPath.concat("/territories/");
			apiPath = apiPath.concat(territory.toString());
			apiPath = apiPath.concat("/actions/validate_before_transfer");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
			return handlerInstance.apiCall("UsersTerritory.Model.ValidationHandler", "application/json");

		}

		/**
		 * The method to delink and transfer from all territories
		 * @param {TransferWrapper} request An instance of TransferWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async delinkAndTransferFromAllTerritories(request){
			if((request != null) && (!(request instanceof ZCRM.UsersTerritory.Model.TransferWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: TransferWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v6/users/");
			apiPath = apiPath.concat(this.user.toString());
			apiPath = apiPath.concat("/territories/actions/transfer_and_delink");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("UsersTerritory.Model.TransferActionHandler", "application/json");

		}

		/**
		 * The method to delink and transfer from specific territory
		 * @param {Long} territory A BigInt
		 * @param {TransferWrapper} request An instance of TransferWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async delinkAndTransferFromSpecificTerritory(territory, request){
			if((!(Object.prototype.toString.call(territory) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.UsersTerritory.Model.TransferWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: TransferWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v6/users/");
			apiPath = apiPath.concat(this.user.toString());
			apiPath = apiPath.concat("/territories/");
			apiPath = apiPath.concat(territory.toString());
			apiPath = apiPath.concat("/actions/transfer_and_delink");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("UsersTerritory.Model.TransferActionHandler", "application/json");

		}

	},

}