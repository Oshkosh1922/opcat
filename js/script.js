function concatenate() {
    const string1 = document.getElementById('string1').value;
    const string2 = document.getElementById('string2').value;
    const result = string1 + string2;
    document.getElementById('result').innerText = `Magic Happens! 🪄 Concatenated Result: ${result}`;

    const fakeCode = generateFakeCode(string1, string2, result);
    typeWriter(fakeCode, 0);
}

function generateFakeCode(string1, string2, result) {
    const hexString1 = toHexString(string1);
    const hexString2 = toHexString(string2);
    const hexResult = toHexString(result);


    return `
// Let's cast a Bitcoin spell with your words!
// Advanced Simulated Bitcoin Script Using OP_CAT
// Note: OP_CAT is a mythical creature in Bitcoin land. 🐱✨

// Step 1: Summon your first string onto the magical stack
PUSHDATA(${hexString1.length / 2}) 0x${hexString1} // "${string1}"

// Step 2: Now, let's add the second string to our potion
PUSHDATA(${hexString2.length / 2}) 0x${hexString2} // "${string2}"

// Step 3: Wave the wand with OP_CAT!
OP_CAT // Poof! The stack now has "${result}"

// Step 4: We need to verify our magical creation
0x${hexResult.length / 2} 0x${hexResult} // Expected result: "${result}"
OP_EQUALVERIFY // Did our spell work?

// Step 5: Every spell needs a final seal...
OP_DUP
OP_HASH160
0x14 <Public Key Hash> // This is where the wizard's signature goes
OP_EQUALVERIFY
OP_CHECKSIG // And... Voila! The magic is complete! 🌟

//THIS WAS A VERY SIMPLE VERSION OF HOW OP_CAT WOULD WORK JUST TO GIVE YOU AN IDEA.  COMBING TWO STRINGS.
`;
}

function typeWriter(text, index) {
    if (index < text.length) {
        document.getElementById('fakeCode').innerHTML = text.substring(0, index + 1);
        setTimeout(() => typeWriter(text, index + 1), 15);
    } else {
        document.getElementById('buttonContainer').style.display = 'inline-block';
    }
}

function toHexString(str) {
    return str.split('').map(c => ('0' + c.charCodeAt(0).toString(16)).slice(-2)).join('');
}

function closePopup() {
    document.getElementById('cloudPopup').style.display = 'none';
}


function openPopup() {
    document.getElementById('cloudPopup').style.display = 'block';
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buttonContainer').style.display = 'none';
});
const fakeCodes = generateFakeCode(string1, string2, result);
typeWriter(fakeCodes, 0);

function generateFakeCode(string1, string2, result) {
const hexString1 = toHexString(string1);
const hexString2 = toHexString(string2);
const hexResult = toHexString(result);

return `
// Beware: The Unleashed OP_CAT Apocalypse!
// Simulated Bitcoin Script

// Step 1: Concatenate two strings
PUSHDATA <length1> <string1> // First input string
PUSHDATA <length2> <string2> // Second input string
OP_CAT // Concatenate them using OP_CAT

// Step 2: Perform some malicious actions
// Warning: These actions can be catastrophic!

// Scenario 1: Transaction Malleability
// Attackers can manipulate transaction IDs, causing confusion and disputes.
OP_HASH256 // Calculate hash of concatenated data
<Attacker's Magic> // Insert attacker's magic here
OP_EQUAL // Check if it matches attacker's magic

// Scenario 2: Smart Contract Vulnerabilities
// OP_CAT can break the logic of smart contracts.
<Malicious Smart Contract Code> // Insert malicious code here

// Scenario 3: Blockchain Bloat
// Excessive use of OP_CAT can lead to large transactions, bloating the blockchain.
PUSHDATA <large_data> // Insert a large piece of data
OP_CAT // Concatenate it repeatedly
OP_CAT // More concatenation
OP_CAT // Endless concatenation!

// Scenario 4: Amplified Spam Attacks
// Spammers can create endless variations of transactions, flooding the network.
<Endless Spam Transactions> // Insert spam transactions here

// Step 3: Chaos Unleashed
// The blockchain becomes a chaotic mess, causing delays, disputes, and confusion.

BUT WE ALL KNOW THE BITCOIN COMMUNITY AND DEVELOPERS WOULD NEVER ALLOW THIS. 
`;
}

function typeWriter(text, index) {
if (index < text.length) {
    document.getElementById('fakeCodes').innerHTML = text.substring(0, index + 1);
    setTimeout(() => typeWriter(text, index + 1), 15);  
} else {
    
    document.getElementById('buttonContainer').style.display = 'inline-block';
}
}

function toHexString(str) {
return str.split('').map(c => ('0' + c.charCodeAt(0).toString(16)).slice(-2)).join('');
}