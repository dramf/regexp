const text = 'Hello there!';

//const regex = new RegExp('ll');
const regex = /ll/;

console.log(regex.test(text));
console.log(text.search(regex));
