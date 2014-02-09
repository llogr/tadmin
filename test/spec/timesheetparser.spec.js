describe("Timesheet parser", function() {
  it("can create a timesheet row entry", function() {
  	var row =  "-BANKHOL  TESSELLA 01/01/14 343  7.5 Bank Holiday";
  	var timesheetParser = new TimesheetParser();
  	var timesheetEntry = timesheetParser.parseEntry(row);

    expect(timesheetEntry.billable).toBe(false);
    expect(timesheetEntry.taskcode).toBe("BANKHOL");
    expect(timesheetEntry.phasecode).toBe("TESSELLA");
    expect(timesheetEntry.date).toBe("01/01/14");
  });
});