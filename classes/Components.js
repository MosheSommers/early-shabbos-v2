class Components{

    addHeader(text){
        this.createElement( 'app', text,'h1', 'header');
    }

    addMainContent(text, classNames = null){
        this.createElement('app',text, 'div', 'main-content', classNames);
    }

    addTable(val = null, id, classNames = null){
        const table = this.createElement('app', null , 'table', id, classNames);
        if(val  instanceof Zemanim){
            let i = 1;
            for(let prop in val){
                this.createElement('table', null , 'tr', 'trow' + i);
                this.createElement('trow' + i, prop , 'td');
                this.createElement('trow' + i, val[prop] , 'td', prop);
                if(prop === 'Plag' || prop === 'Shkia'){
                    this.createElement(prop,'*', 'span', null, ['error']);
                }
                i++;
            }
        }
    }

    hideSpinner(){
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('spinner-message').style.display = 'none';
    }

    addAccuracyMessage(){
        this.createElement('app', null, 'div', 'message');
        this.createElement('message','*', 'span', null, ['error']);
        this.createElement('message','May be a few minutes off.', 'span');
    }
    
    addPrintButton(){
        this.createElement('body', null, 'img', 'print');
        document.getElementById('print').setAttribute("src", "print.svg");
        document.getElementById('print').setAttribute("onclick", "window.print()");
        document.getElementById('app').style.cssFloat = 'left';
        document.getElementById('print').style.cssFloat = 'left';
    }

    createElement(addTo, val = null, element = 'div', id = null, classNames = null){
        //Create element
        const elem = document.createElement(element);
        //Add text
        if(val !== null){
            const textnode = document.createTextNode(val);
            elem.appendChild(textnode); 
        }
        //Add id
        if(id !== null){
            const textnode = document.createTextNode(val);
            elem.id = id; 
        }
        //Add class or classes
        if(classNames !== null && Array.isArray(classNames)){
            elem.classList = classNames;
        }
        document.getElementById(addTo).appendChild(elem);

        return elem;
    }
}