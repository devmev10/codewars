// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// My Solution

function solve(s){
    let tab = s.split("");
    for (i=0; i<tab.length; i++) {
       tab[i] = tab[i] - 0;
    }
    tab = tab.join("").split("NaN");
    return Math.max(...tab);
    }