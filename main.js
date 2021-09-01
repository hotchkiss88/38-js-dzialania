function myF(a, b) {

    let sum = a + b;
    let sub = a - b;
    let multi = a * b;

    if (sum < 0) {
        console.log(
            "Wynik jest nieprawidłowy");
    } else {
        console.log("Wynik dodawania wynosi" + " " + sum);
    }


    if (sub < 0) {
        console.log(
            "Wynik jest nieprawidłowy");
    } else {
        console.log("Wynik odejmowania wynosi" + " " + sub);
    }


    if (multi < 0) {
        console.log(
            "Wynik jest nieprawidłowy");
    } else {
        console.log("Wynik mnożenia wynosi" + " " + multi);
    }
}


myF(5, 10);