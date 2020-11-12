// Your code here
//Polygon
class Polygon {

    constructor(arrayOfSides) {
        this.sides = arrayOfSides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
    if (!Array.isArray(this.sides)) return;
    let sum = 0;
    for (var int of this.sides) {
      sum += int
    }
    return sum
    }
}

//Triangle


//Square