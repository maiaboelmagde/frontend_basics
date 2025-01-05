obj = {id: 'SD-10',
    location: 'SV',  
    addr: '123 st.',  
    getSetGen: function(){
        let Objkeys = Object.keys(this);
        console.log(Objkeys)
        for(let i in Objkeys){
            this['set'+Objkeys[i]]=function(val){
                this[Objkeys[i]] = val;
            }
            this['get'+Objkeys[i]]=function(){
                return this[Objkeys[i]]
            }
        }
    } 
} 

obj.getSetGen();
obj.setid(123);
console.log(obj.getid());
obj.setlocation("loc");
console.log(obj.getlocation());
obj.setaddr("newAdd");
console.log(obj.getaddr());

var user = {name: 'Ali', age: 10} 
obj.getSetGen.apply(user);
console.log(user.getname());
user.setname("another name");
console.log(user.getname());
user.setage(30);
console.log(user.getage());
