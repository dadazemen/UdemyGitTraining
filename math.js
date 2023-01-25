function data() {
    let array = []; //1000
    console.time("messung");
    for (x = 0; x < 1000; x++) {
        array[x] = x;
    }
    console.timeEnd("messung");
}