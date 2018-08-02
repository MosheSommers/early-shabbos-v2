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
            const { shkia, plag, candleLighting , earlyCandleLighting  } = val;

            this.createElement('table', null , 'tr', 'trow1');
            this.createElement('trow1', 'Plag' , 'td');
            this.createElement('trow1', plag , 'td', 'plag');
            this.createElement('plag','*', 'span', null, ['error']);

            this.createElement('table', null , 'tr', 'trow2');
            this.createElement('trow2', 'Early Candle Lighting' , 'td');
            this.createElement('trow2', earlyCandleLighting , 'td');

            this.createElement('table', null , 'tr', 'trow3');
            this.createElement('trow3', 'Candle Lighting' , 'td');
            this.createElement('trow3', candleLighting , 'td');

            this.createElement('table', null , 'tr', 'trow4');
            this.createElement('trow4', 'Shkia' , 'td');
            this.createElement('trow4', shkia , 'td', 'shkia');
            this.createElement('shkia','*', 'span', null, ['error']);

            
            
        }
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