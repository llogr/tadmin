function TimesheetParser() {
	
	this.parseEntry = function(entryText) {
		var billableText = entryText.slice(0,1);
		var taskcode = entryText.slice(1,9).trim();
		var phasecode = entryText.slice(10,18).trim();
		var date = entryText.slice(19,27);
		
		return new Entry(taskcode,phasecode,date,"",Entry.decodeBillableString(billableText), "","");
	};

}