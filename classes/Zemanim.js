class Zemanim{
    constructor(shkia, plag) {
        this.shkia = this.getTime(shkia);
        this.plag = this.getTime(plag);
        this.candleLighting = this.getCandleLighting(shkia);
        this.earlyCandleLighting = this.getEarlyCandleLighting(plag);
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