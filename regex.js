// Regex and function used to validate contact form's input data.
const regex = {
    name: /^[a-zÀ-ú\s]{2,30}$/i,
    telephone: /^\d{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validateInput (regex, field) {
    if (regex.test(field) == true) {
        return true
    } else {
        return false
    }
}

// Regex used to insert thousand separator in forms' numeric inputs.
function numberThousandSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}