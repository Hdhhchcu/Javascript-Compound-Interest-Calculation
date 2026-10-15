# Compound Interest Calculator

A simple JavaScript function that calculates compound interest based on the principal amount, annual interest rate, compounding frequency, and investment duration.

## Formula

The compound interest formula is:

`A = P * (1 + r / n) ** (n * t)`

Compound interest is calculated as:

`CI = A - P`

Where:

- `P` — Principal amount
- `r` — Annual interest rate expressed as a decimal
- `n` — Number of times interest is compounded per year
- `t` — Time in years
- `A` — Final amount, including interest
- `CI` — Compound interest earned

## JavaScript Implementation

```javascript
function calculateCompoundInterest(p, r, n, t) {
    const roi = r / 100;

    const amount = p * (1 + roi / n) ** (n * t);

    return amount - p;
}

const p = 3000; // Principal amount
const r = 16;   // Annual interest rate (%)
const n = 4;    // Compounding periods per year (quarterly)
const t = 3;    // Time in years

console.log(
    "The compound interest after 3 years is:",
    calculateCompoundInterest(p, r, n, t).toFixed(2)
);
```

## Example

With the following inputs:

| Parameter | Value |
|---|---:|
| Principal (`p`) | 3000 |
| Annual interest rate (`r`) | 16% |
| Compounding frequency (`n`) | 4 times per year |
| Duration (`t`) | 3 years |

**Output:**

```text
The compound interest after 3 years is: 1808.73
```

The final amount is approximately **₹4,808.73**, including the original principal of ₹3,000.

## How It Works

1. Convert the annual interest rate from a percentage to a decimal using `r / 100`.
2. Calculate the accumulated amount with `p * (1 + roi / n) ** (n * t)`.
3. Subtract the principal from the accumulated amount to return only the compound interest.

## Input Requirements

- `p` should be a non-negative principal amount.
- `r` should be the annual interest rate as a percentage.
- `n` should be a positive number representing compounding periods per year.
- `t` should be a non-negative duration in years.

This example is for learning purposes and does not account for taxes, fees, or changing interest rates.
