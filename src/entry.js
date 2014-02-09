function Entry(taskcode, phasecode, date, hours, billable, officeOverheads, description) {
	this.taskcode = taskcode;
	this.phasecode = phasecode;
	this.date = date;
	this.hours = hours;
	this.billable = billable;
	this.officeOverheads = officeOverheads;
	this.description = description;

	function toString() {
		return "String";
	}

	this.encodeType = function() {
		if (billable) {
			return " ";
		} else {
			return "-";
		}
	};
}

Entry.decodeBillableString = function(fieldText) {
	if (fieldText === " ") {
		return true;
	} else {
		return false;
	}
};

// -BANKHOL  TESSELLA 01/04/13 343  7.5 Bank Holiday