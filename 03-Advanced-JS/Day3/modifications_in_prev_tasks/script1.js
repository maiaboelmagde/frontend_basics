var ObjCON = function (start, end, step){
    if(isNaN(start) || isNaN(end) || isNaN(step) || start > end){
        throw 'recheck parameter you passed to ObjCON Constructor ....';
    }

    var data = [];
    var fillData = function(){
        var cur = start;
        do{
            data.push(cur);
            cur += step;
        }while(cur <= end);
    }
    fillData();

    Object.defineProperty(this,'Data',{
        get : function() { return data; }, 
        set : function({_start, _end, _step}){
            if(isNaN(_start) || isNaN(_end) || isNaN(_step) || _start > _end){
                throw 'recheck parameter you passed to ObjCON.setData ....';
            }
            start = _start;
            end = _end;
            step = _step;
            data=[];
            fillData();
        },
        enumerable: false,
        configurable: false,
    });
    /*
    this.getData = function(){
        return data;
    }
    this.setData = function(_start, _end, _step){
        if(isNaN(_start) || isNaN(_end) || isNaN(_step) || _start > _end){
            throw 'recheck parameter you passed to ObjCON.setData ....';
        }
        start = _start;
        end = _end;
        step = _step;
        data=[];
        fillData();
    }
*/

Object.defineProperties(this,
    {
        'prepend': {
            value: function (value) {
                if (isNaN(value)) {
                    throw "The value isn't a number!";
                }
                if (value === start - step) {
                    data.unshift(value);
                    start = value;
                } else {
                    console.log(`This value ${value} doesn't match the sequence...`);
                }
            },
            enumerable: false,
            configurable: false,
            writable: false,
        },
        'append': {
            value: function (value) {
                if (value === end + step) {
                    data.push(value);
                    end = value;
                } else {
                    console.log(`This value ${value} doesn't match the sequence...`);
                }
            },
            enumerable: false,
            configurable: false,
            writable: false,
        },
        'dequeue': {
            value: function () {
                if (data.length === 0) {
                    throw "There's no data to dequeue";
                }
                data.shift();
                if (data.length !== 0) {
                    start = data[0];
                } else {
                    start = 0;
                    end = -1;
                }
            },
            enumerable: false,
            configurable: false,
            writable: false,
        },
        'pop': {
            value: function () {
                if (data.length === 0) {
                    throw "There's no data to pop";
                }
                data.pop();
                if (data.length !== 0) {
                    end = data[data.length - 1];
                } else {
                    start = 0;
                    end = -1;
                }
            },
            enumerable: false,
            configurable: false,
            writable: false,
        },
        'toString' :{ 
            value: function(){
                return data.toString();
            },
            enumerable: false,
            configurable: false,
            writable: false,
        }
    }
);


/*
    this.prepend= function(value){
        if(isNaN(value)){
            throw "the value isn't a number !!!!!";
        }
        if(value == start-step){
            data.unshift(value);
        }else{
            try{
                throw 'this value '+value+" doesn't match the sequence...";
            }catch(error){
                console.log(error);
            }
        }
    }

    this.append = function (value){
        if(value == end + step){
            data.push(value);
        }else{
            try{
                throw 'this value '+value+" doesn't match the sequence...";
            }catch(error){
                console.log(error);
            }
        }
    }
    this.dequeue = function(){
        if(data.length == 0){
            throw 'there`s no data to dequeue';
        }
        data.shift();
        if(data.length != 0)
            start = data[0];
        else{
            start = 0;
            end = -1;
        }
    }
    this.pop = function(){
        if(data.length == 0){
            throw 'there`s no data to pop';
        }
        data.pop();
        if(data.length != 0)
            end = data[data.length-1];
        else{
            start = 0;
            end = -1;
        }

    }
    */
}



myObj = new ObjCON(0,6,2);
console.log(myObj.Data); 
//console.log(myObj.getData()); 
myObj.append(4); //this value 4 doesn't match the sequence...
myObj.append(8);
console.log(myObj.Data); 
//console.log(myObj.getData());
myObj.prepend(-1);
myObj.prepend(-2);
console.log(myObj.Data); 
//console.log(myObj.getData());
ObjCON.Data = { _start: 1, _end: 10, _step: 2 };
//myObj.setData(3,9,3);
console.log(myObj.Data); 
//console.log(myObj.getData());
myObj.pop();
console.log(myObj.Data); 
//console.log(myObj.getData());
myObj.dequeue();
console.log(myObj.Data); 
//console.log(myObj.getData());

console.log('toString() result : '+ myObj.toString(''));
