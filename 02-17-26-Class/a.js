class Shape{
    constructor(name){
        if(new.target=== Shape){
            throw new Error('Shape is abstract');
        }
    }

    draw(){
        console.log("shape draw") //Overridden method
    }

}

class Circle extends Shape{
    constructor(name, radius){
        super(name);
        this.radius = radius;
    }

    draw(){ //Overridding Method
        console.log(`Drawing ${this.name} with radius: ${this.radius}`);
    }

    area(){
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape{
    constructor(name = "Rectangle", width, height){
        super(name);
        this.width = width;
        this.height = height;
    }

    draw(){ //Overridding Method
        console.log(`Drawing ${this.name} with width: ${this.width}, height: ${this.height}`);
    }

    area(){
        return this.height * this.width;
    }
}


const shapes = [new Circle("CircleOne"), new Rectangle("RectangleOne")]