export class SingletonClass{
    Counter = 0;
    constructor(){
        if(SingletonClass.instance){
            return SingletonClass.instance;
        }
        SingletonClass.instance = this;
        this.Counter++;
    }

    getCounter(){
        return this.Counter;
    }
}
