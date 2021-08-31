function myF(a, b) {
    if (((a + b) < 0) || ((a - b) < 0) || ((a * b) < 0)) {
        console.log(
            "Wynik jest nieprawidłowy");
    } else {
        sum = a + b;
        sub = a - b;
        multi = a * b;

        console.log("Wynik dodawania wynosi" + " " + sum);
        console.log("Wynik odejmowania wynosi" + " " + sub);
        console.log("Wynik mnożenia wynosi" + " " + multi);
    }
}


// myF(15, 2);