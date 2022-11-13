const reverseWords = (s) => {
    return s.trim().split(/ +/g).reverse().join(" ")
};

var s = "the sky is blue"
var s = "  hello world  "
var s = "a good   example"
const res = reverseWords(s);

console.log(res);