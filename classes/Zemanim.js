class Zemanim{
    constructor(shkia, plag) {
        this['Shkia'] = this.getTime(shkia);
        this['Plag'] = this.getTime(plag);
        this['Candle Lighting'] = this.getCandleLighting(shkia);
        this['Early Candle Lighting Before'] = this.getEarlyCandleLighting(plag);
      }

      getTime(time){
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          };
         return time.toLocaleString('en-US', options);
      }

      getCandleLighting(shkia){
          const candleLighting = new Date((shkia.getTime() - (60000 * 18)));
          return this.getTime(candleLighting);
      }

      getEarlyCandleLighting(plag){
        const candleLighting = new Date((plag.getTime() + (60000 * 35)));
        return this.getTime(candleLighting);
    }
}