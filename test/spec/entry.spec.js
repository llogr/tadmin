describe("Entry", function() {
  it("can encode billable field", function() {
  	var billableEntry = new Entry("TASK", "DEVELOP", "31/05/2013", 4, true, true, "Some description");
    expect(billableEntry.encodeType()).toBe(" ");
  });

  it("can encode non billable field", function() {
  	var nonBillableEntry = new Entry("TASK", "DEVELOP", "31/05/2013", 4, false, true, "Some description");
    expect(nonBillableEntry.encodeType()).toBe("-");
  });
});