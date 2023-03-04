// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

// My Solution
function nerdify(txt) {
  return txt
    .split("")
    .map((item) =>
      item.toLowerCase() === "a"
        ? 4
        : item.toLowerCase() === "e"
        ? 3
        : item === "l"
        ? 1
        : item
    )
    .join("");
}
