// Your code here
class Polygon {

    constructor(arrayOfSides) {
        this.sides = arrayOfSides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sides.reduce(reducer, 0)
    }
}