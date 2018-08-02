
const c = new Components;
const d = new Dates();
console.log(d.getFriday());
c.addHeader('Early Shabbos');

async function populateTable(){
    const z =  await d.createZemanim();
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('spinner-message').style.display = 'none';

    
    c.addTable(z, 'table');
    c.createElement('app', null, 'div', 'message');
    c.createElement('message','*', 'span', null, ['error']);
    c.createElement('message','May be a few minutes off.', 'span');
}

populateTable();
