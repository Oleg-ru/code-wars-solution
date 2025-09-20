function validatePIN (pin) {
    return pin.match("^\\d{4}(\\d{2})?$") > "0";
}