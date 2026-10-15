
function calculateCompundInterest(p, r, n, t) {

    const roi = r/100;

    const amount = p*(1+ roi/n)**(n*t);

    return amount - p;

}

const p = 3000; // principal amount
const r = 16; // rate of interest
const n = 4; // number of times interest compounded in year.
const t = 3; // time in years

console.log('The Compound interest after 3 years is :', calculateCompundInterest(p, r, n, t));
