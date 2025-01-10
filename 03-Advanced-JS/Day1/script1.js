var LnkdLstObj ={
    data: [],
    enqueue: function (value) {
        if(this.data.length!=0 && this.data[0].val < value){
            throw "it would cause an mistake in sequence";
        }else{
            this.data.unshift({val:value});
        }
    },
    push: function(value){
        if(this.data.length!=0 && this.data[this.data.length-1]>value){
            throw "it would cause an mistake in sequence";
        }else{
            this.data.push({val:value});
        }
    },
    pushVal:function (value){
        while(isNaN(value)){
            value = Number(prompt("Enter a number"));
        }
        let i;
        for( i = 0; i<this.data.length && this.data[i].val < value; i++){
        }
        try {
            if(i<this.data.length){
                if(this.data[i].val != value){
                    for(let j = this.data.length; j>i ;j--){
                        this.data[j]={
                            val:this.data[j-1].val
                        }
                    }
                    this.data[i].val=value;
                    }
            }else{ //i == length
                throw new Error("push an item "+ value +" at the end of the list with the passed value");
            }
        } catch (error) {
            console.log(error);
            this.data[this.data.length]={
                val:value
            }
        }
    },
    pushValAt:function (value, idx){
        if(idx > this.data.length){
            throw "the position you intere is bigger than array length ...";
        }else if(idx == this.data.length){//at the end
            if (this.data[this.data.length-1].val > value) {
                throw "Can't assign this value here, as the value in a prev possition is bigger than it";
            }else if(this.data[this.data.length-1].val == value){
                throw "this value Existed already in the prev position";
            }else{
                this.data[this.data.length]={
                    'val' : value
                }
            }
        }else if(idx == 0){
            if (this.data[0].val<value) {
                throw "it would cause a mistake in the sequence ....";
            }else if (this.data[0].val==value) {
                throw "it would cause a duplication on values....";
            }else{
                this.data.push({'val':0});
                for (let index = this.data.length-1; index > 0; index--) {
                    this.data[index].val = this.data[index-1].val;
                }
                this.data[0].val = value;
            }
        }else{ // 0<idx<length
            if(this.data[idx-1].val < value && this.data[idx].val > value){ //shift the end then set the value
                console.log(this.data.length);
                this.data.push({'val':0});
                for(let i = this.data.length-1; i > idx; i--){
                    this.data[i].val = this.data[i-1].val;
                }
                this.data[idx].val=value;
            }else{
                throw "it would cause a mistake in the sequence ....";
            }
        }
    },
    display:function() {
        for (const key in this.data) {
            console.log(key+" : "+this.data[key].val);
        }
    },

    pop:function(){
        if(this.data.length != 0)
            this.data.pop();
        else
            throw "No vlaues in linkedlist to pop";

        console.log(this.data);
            
    },

    remove:function(value){
        let idx = -1;
        for(let i in this.data){
            if(this.data[i].val === value){
                idx  = i;
            }
        }
        if(idx == -1){
            return "data not found";
        }else{
            //shift elements then pop
            for (; idx < this.data.length - 1; idx++) {
                this.data[idx].val = this.data[Number(idx) + 1].val;
            }
            this.data.pop();
            return value +"dalated";
        }
    },

    dequeue: function(){
        if(this.data.length != 0)
            this.data.shift();
        else
            throw "No vlaues in linkedlist to pop";
    }
}

LnkdLstObj.enqueue(7);
LnkdLstObj.display();
console.log("----------adding 3-------------");
LnkdLstObj.pushVal(3);
LnkdLstObj.display();
console.log("----------adding 2-------------");
LnkdLstObj.pushVal(2);
LnkdLstObj.display();
console.log("---------adding 2(repeated value)--------------");
LnkdLstObj.pushVal(2);
LnkdLstObj.display();
console.log("---------adding 5--------------");
LnkdLstObj.pushVal(5);
LnkdLstObj.display();
console.log("---------pushValAt(4,2)-------------");
LnkdLstObj.pushValAt(4,2);
LnkdLstObj.display();
console.log("---------pushValAt(1,0)-------------");
LnkdLstObj.pushValAt(1,0);
LnkdLstObj.display();
//console.log("---------pushValAt-------------");
//LnkdLstObj.pushValAt(5,5);  //Duplicate
//LnkdLstObj.display();
console.log("---------pushValAt(6,5)-------------");
LnkdLstObj.pushValAt(6,5);
LnkdLstObj.display();
console.log("----------pop-------------");
LnkdLstObj.pop();
LnkdLstObj.display();
console.log("----------remove 2-------------");
console.log(LnkdLstObj.remove(2));
LnkdLstObj.display();
console.log("-----------remove 5------------");
console.log(LnkdLstObj.remove(5));
LnkdLstObj.display();
console.log("----------dequeue-------------");
LnkdLstObj.dequeue();
LnkdLstObj.display();
console.log("-----------------------");
console.log(LnkdLstObj.data);
