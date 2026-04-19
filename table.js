const tableData = [
    {type: "Subscription", budget: 100, actual: 25, final: 100 - 25},
    {type: "Bill", budget: 1000, actual: 1025, final: 1000 - 1025},
    {type: "Food", budget: 100, actual: 50, final: 100 - 50},
    {type: "Misc", budget: 1000, actual: 0, final: 1000 - 0}
];
const table = document.getElementById("financeTable");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "Type";
headerRow.appendChild(th1);
const th2 = document.createElement("th");
th2.textContent = "Budget";
headerRow.appendChild(th2);
const th3 = document.createElement("th");
th3.textContent = "Actual";
headerRow.appendChild(th3);
const th4 = document.createElement("th");
th4.textContent = "Final";
headerRow.appendChild(th4);
thead.appendChild(headerRow);
table.appendChild(thead);
tableData.forEach(row => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = row.type;
    tr.appendChild(td1);
    const td2 = document.createElement("td");
    td2.textContent = row.budget;
    tr.appendChild(td2);
    const td3 = document.createElement("td");
    td3.textContent = row.actual;
    tr.appendChild(td3);
    const td4 = document.createElement("td");
    td4.textContent = row.final;
    tr.appendChild(td4);
    table.appendChild(tr)
})