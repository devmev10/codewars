// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

// //return s.toUpperCase() ?
// Test.assertSimilar(testit(""), "", "")
// Test.assertSimilar(testit("a"), "A", "")
// Test.assertSimilar(testit("b"), "B", "")
// Test.assertSimilar(testit("a a"), "A A", "")
// Test.assertSimilar(testit("a b"), "A B", "")
// Test.assertSimilar(testit("a b c"), "A B C", "")

// My Solution
const testit =s => s.split(" ").map(word => word.slice(0, -1) + word.slice(-1).toUpperCase()).join(" ");