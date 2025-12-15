let s="hello world";
console.log(s.length);
console.log(s.charAt(2));
console.log(s.slice(2,4));
console.log(s.includes("odbe"));
console.log(s.startsWith("he"));
console.log(s.replace("l","i"));
console.log(s.replaceAll("l","i"));
console.log(s.concat(" krithi"));
let ss="        heyy        ";
console.log(ss.trim());
console.log(ss.trimStart());
console.log(ss.trimEnd());
console.log(s.repeat(3));
console.log(s.split(" "));
let t="krithi";
console.log(t.padStart(10,"wer "));
console.log(t.padEnd(10,"wer "));
console.log(s.replace("h","H").replace("w","W"));
function countWords(sentence) {
    
    let words = sentence.trim().split(" ");
    return words.length;
}
console.log(countWords("I love javascript")); 
let k="my name is john";
console.log(k.trim().split(" ").join("-"));
let str = "programming";
str = str.replace(/ /g, "");  

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    // check if this character appears again later
    if (str.indexOf(ch) !== str.lastIndexOf(ch)) {
        console.log(ch);
    }
}
let m="John Doe Smith";
let p=m.split(" ");
console.log(p[0][0]+p[1][0]+p[2][0]);



