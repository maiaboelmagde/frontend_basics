var rectangle= function (_width = 0, _height = 0){
    //this.width = _width;
    //this.height = _height;

    if(!isNaN(_width)){
        var width = _width;
    }
    if(!isNaN(_height)){
        var height = _height;
    }

    this.setWidth= function(_width){
        if(isNaN(_width)){
            return
        }
        width = _width;
    }
    this.setHeight= function(_height){
        if(isNaN(_height)){
            return
        }
        height = _height;
    }
    this.getWidth= function (){
        return width;
    }
    this.getHeight = function(){
        return height;
    }
    this.CalcArea = function(){
        return this.getWidth() * this.getHeight();
    }

    this.calcPerimeter = function(){
        return this.getWidth() + this.getWidth();
    }

    this.displayInfo= function(){
        return 'this is a triangle with width = '+this.getWidth()+' , height = '+this.getHeight()+' Area = '+this.CalcArea()+' and  perimeter = '+this.calcPerimeter();
    }
}

var myRect = new rectangle(2,3);
console.log(myRect.CalcArea());
console.log(myRect.displayInfo());
