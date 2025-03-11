const { EventEmitter } = require("nodemailer/lib/xoauth2");

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
        this.sort()
        while(this.events.length){
            const event = this.events.shift();
            const starDate = new Date(event.date);
            await sleep(starDate - Date.now());
            event.fn();
        }
        this.empty = true
        
    }
}

module.exports = Calendar;