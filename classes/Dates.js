class Dates{

     getPosition() {
        // Simple wrapper
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        });
    }
    
    async  createZemanim() {
        var position = await this.getPosition();  // wait for getPosition to complete
        const times = SunCalc.getTimes(this.getFriday(), position.coords.latitude,  position.coords.longitude);
        console.log(times);
        const shkia = new Date(times.sunsetStart).getTime();
        const netz =  new Date(times.sunrise).getTime();
        const plag = shkia - (((shkia - netz) / 12) * 1.25);
        const zemanim = new Zemanim(new Date(shkia), new Date(plag));
        return zemanim;
    }

    getFriday(){
        const resultDate = new Date();
        const now = new Date();
        //Thanks @Pablo González Alba https://codereview.stackexchange.com/questions/33527/find-next-occurring-friday-or-any-dayofweek
                        //    Current day of month (1-31)                         
         resultDate.setDate(now.getDate() + ((7 + 5 - now.getDay()) % 7));
         return resultDate;
    }
}