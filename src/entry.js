function Entry(taskcode, phasecode, date, hours, billable, officeOverheads, description) {
	this.taskcode = taskcode;
	this.phasecode = phasecode;
	this.date = date;
	this.hours = hours;
	this.description = description;
	this.billable = billable;

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

// -BANKHOL  TESSELLA 01/04/13 343  7.5 Bank Holiday