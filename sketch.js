function setup() {

    let a = new Matrix(2, 3);
    a.randomize();
    let b = a.transpose();

    a.print();
    b.print();
}