/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.current = {
    url: homepage,
    next: null,
    back: null,
  };
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.current.next = {
    url,
    next: null,
    back: this.current,
  };
  this.current = this.current.next;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (steps !== 0 && this.current.back) {
    this.current = this.current.back;
    steps--;
  }
  return this.current.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (steps !== 0 && this.current.next) {
    this.current = this.current.next;
    steps--;
  }
  return this.current.url;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
