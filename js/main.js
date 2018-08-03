(function(){
    var TxtType = function(el, toRotate, period){
        this.el = el;
        this.toRotate = toRotate;
        this.period =  parseInt(period, 10) || 2000;
        this.loopNum =  0;
        this.txt = '';
        this.isDeleting = false;
    }

    TxtType.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if(this.isDeleting){
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        }else{
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
        
        let that = this;
        let delta = 200 - Math.random() * 100;

        if(this.isDeleting){delta /= 2;}
        if(!this.isDeleting && this.txt === fullTxt){
            delta = this.period;
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => {
            that.tick()
        }, delta)
    }

    window.onload = () => {
        let element = document.getElementById("who-am-i");
        let toRotate = element.getAttribute("data-say");
        let period = element.getAttribute("data-period");
        
        if(toRotate){
            let obj = new TxtType(element, JSON.parse(toRotate), period);
            obj.tick();
        }
    }
})()