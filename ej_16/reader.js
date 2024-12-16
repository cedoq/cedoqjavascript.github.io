import fs from 'node:fs';//Require
function findme(param) {
    
}
try {
    const data = fs.readFileSync('./post.txt', 'utf8');
    modtext_ = data.replaceAll(/\bgilipollas\b/gi, "*********")
} catch (err) {
    console.error(err);
}
