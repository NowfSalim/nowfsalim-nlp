function validateURL(input) {
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' +               
        '(www\\.)?' +                       
        '([\\w-]+\\.)+[a-z]{2,6}' +         
        '(\\/[\\w\\-._~:?#[\\]@!$&\'()*+,;=]*)?$', 
        'i'
    );
    return pattern.test(input);
}
export { validateURL };
