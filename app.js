
const c = new Components;
const d = new Dates();
c.addHeader('Early Shabbos');

async function populateTable(){
    const z =  await d.createZemanim();

    c.hideSpinner();

    c.addTable(z, 'table');
    c.addAccuracyMessage();
    c.addPrintButton();
}

populateTable();