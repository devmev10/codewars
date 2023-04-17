// Grinch wants to spoil Christmas for JavaScript programmers. For that, he devised a hellish plan: pollute their Date prototype so that Christmas never happens. He wants to change method getDate of Date so that it returns 26 for Date objects that represent 25th of December but works correctly for all other days of the year.

// However, Grinch does not know how to do that. Can you help him?

// My Solution
Date.prototype._getDate = Date.prototype.getDate;
Date.prototype.getDate = function () {
  if (this.getMonth() === 11 && this._getDate() === 25) {
    return 26;
  } else {
    return this._getDate();
  }
};
