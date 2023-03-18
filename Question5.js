// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0,
    n2 = 1,
    s = [],
    nextTerm;

document.write('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    document.write(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}