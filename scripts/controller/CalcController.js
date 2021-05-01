class CalcCotroller{

    constructor(){
        this._locate = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
       }
    
    initialize(){
        
            this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

        initButtonsEvents(){
            let buttons = Document.querySelectorAll("#buttons > g, #parts > g")

            buttons.forEach(btn=>{

                btn.addEventListener('click', e=>{

                    console.log(e);

                });
                
            })
    }

        setDisplayDateTime(){
            this.displayDate = this.currentDate.toLocaleDateString(this._locate,{
                day: "2-digit",
                month: "long",
                year: "numeric"
            });
            this.displayTime = this.currentDate.toLocaleTimeString(this._locate);

        }

        get displayTime(){
            return this._dateEl.innerHTML;
        }

        set displayTime(value){
            this._timeEl.innerHTML = value;
        }

        get displayDate(){
            return this._dateEl.innerHTML;
        }

        set displayDate(value){
            this._dateEl.innerHTML = value;
        }

       get displayCalc(){
           return this._displayCalcEl.innerHTML;
       }

       set displayCalc(value){
            this._displayCalcEl.innerHTML = value;
       }

       get currentDate(){
           return new Date();
       }

       set currentDate(value){
           this.currentDate = value;
       }

}