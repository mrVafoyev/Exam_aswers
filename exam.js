// Reverse String & Integers
function reverseText() {
    let inputText = document.getElementById('reverseStrInput').value;
    let reversedText = inputText.split('').reverse().join('');
    document.getElementById('reversedOutput').innerText = reversedText;
}


// Palindrom
function checkPalindrome() {
    let inputText = document.getElementById('palindromeInputText').value.toLowerCase();
    let reversedText = inputText.split('').reverse().join('');

    if (inputText === reversedText) {
        document.getElementById('palindromeResult').innerText = 'Palindrom!';
    } else {
        document.getElementById('palindromeResult').innerText = 'Palindrom emas!';
    }
}


// Array chunking
function chunkArray() {
    let inputArray = document.getElementById('inputArray').value.split(',');
    let chunkSize = parseInt(document.getElementById('chunkSize').value);
    let chunkedArray = [];

    for (let i = 0; i < inputArray.length; i += chunkSize) {
        let chunk = inputArray.slice(i, i + chunkSize);
        chunkedArray.push(chunk);
    }

    document.getElementById('chunkedResult').innerText = JSON.stringify(chunkedArray);
}


// Title case
function titleCase() {
    let inputText = document.getElementById('inputText').value;
    let capitalizedText = inputText[0].toUpperCase() + inputText.slice(1);
    document.getElementById('result').innerText = capitalizedText;
}


// Count vowels
function countVowels() {
    let inputText = document.getElementById('vowelInputText').value.toLowerCase();
    let vowelList = 'aeiou';
    let vowelCount = 0;

    for (let i = 0; i < inputText.length; i++) {
        if (vowelList.indexOf(inputText[i]) !== -1) {
            vowelCount++;
        }
    }

    document.getElementById('vowelCount').innerText = vowelCount;
}


// Phone number identifiier
function checkPhoneNumber() {
    let phoneNumber = document.getElementById('inputPhoneNumber').value.trim();

    if (phoneNumber.startsWith('+998')) {
        document.getElementById('phoneNumberResult').innerText = "Bu O'zbekiston telefon raqami!";
    } else if (phoneNumber.startsWith('+7')) {
        document.getElementById('phoneNumberResult').innerText = 'Bu Rossiya telefon raqami!';
    } else {
        document.getElementById('phoneNumberResult').innerText = "Bu O'zbekiston yoki Rossiya telefon raqami emas!";
    }
}




/*
HTML    HTML    HTML    HTML    HTML

1-B
2-A
3-B
4-B
5-A
6-D
7-A
8-C
9-C
10-B
11-C
12-C
13-B
14-D
15-D
16-C
17-A
18-C
19-A
20-A


CSS     CSS     CSS     CSS     CSS

21-D
22-B
23-A
24-B
25-D
26-A
27-D
28-A
29-E
30-D
31-C
32-D
33-E
34-c
35-B
36-C
37-A
38-D
39-A
40-D
41-A
42-B
43-E
44-B
45-A
46-E
47-E
48-B
49-C
50-D
51-B
52-E
53-A
54-C
55-D
56-C
57-B
58-A
59-C
60-D
61-A
62-D
63-D
64-E
65-B
66-A
67-D
68-B
69-C
70-A
71-B
72-C
73-B
74-B
75-B
76-B
77-A
78-C
79-D
80-C
81-C
82-A
83-C
84-A
85-D
86-A
87-A
88-B
89-A
90-B
91-D
92-D
93-B
94-D
95-C
96-B
97-A
98-D
99-A
100-D
101-A
102-B
103-B
104-C
105-B
106-B
107-D
108-C
109-A
110-C
111-C
112-C
113-E
114-B
115-A
116-D
117-B
118-D
119-B
120-B
*/
