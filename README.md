# MongoDB $inc Operator Error with Non-Numeric Value

This repository demonstrates a common error when using the MongoDB `$inc` operator: attempting to increment a numeric field with a non-numeric value. The `$inc` operator is designed to increment or decrement a numeric field in a document.  Attempting to use it with a non-numeric value leads to an error.

The `bug.js` file shows the erroneous code, and `bugSolution.js` provides the corrected implementation.

## How to Reproduce

1.  Ensure you have a MongoDB instance running.
2.  Create a collection named `myCollection` with a document containing a numeric field (e.g., `count`).
3.  Run `bug.js`. You'll observe a MongoDB error.
4.  Run `bugSolution.js` to see the correct implementation.