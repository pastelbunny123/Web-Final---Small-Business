function rateCafe() {
    let rating = document.getElementById("quantity").value;

    if (rating === "" || rating < 0 || rating > 10) {
        alert("Please enter a number between 0 and 10!");
    } else {
        document.getElementById("thankyou").innerHTML =
        "Thank you for rating our cafe a " + rating + " out of 10!";
    }
}