function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


class Calendar{
    constructor(){
        this.events = [];
        this.empty = true;
    }

    addEvent(event){
        if(event.date && event.fn){
            if(new Date(event.date) < Date.now()){
                return false;
            }
            this.events.push(event);
            if(this.empty){
                this.init();
            }
            this.sort();
            this.empty = false;
            return true;
        }else{
            return false;
        }
    
    }
    
    sort(){
        this.events.filter(e => new Date(e.date) > Date.now())
        this.events.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        })
    }

    async init(){
        this.sort();
        while(this.events.length){
            const event = this.events.shift();
            const starDate = new Date(event.date);
            const timeToWait = starDate - Date.now();

            if (timeToWait > 0) {
                const interrupted = await Promise.race([
                    sleep(timeToWait).then(() => false),
                    new Promise(resolve => {
                        const interval = setInterval(() => {
                            if (this.events.length && new Date(this.events[0].date) < starDate) {
                                console.log('interrupted');
                                clearInterval(interval);
                                resolve(true);
                            }
                        }, 1000);
                    })
                ]);

                if (interrupted) {
                    this.events.push(event); 
                    this.sort();
                    continue;
                }
            }
            try{
                event.fn();
            }catch(e){
                console.error(e);
            }
        }
        this.empty = true;
    }
}

function createEvent(fn, date){
    return {
        fn: fn,
        date: date
    }
}


module.exports = {Calendar, createEvent};