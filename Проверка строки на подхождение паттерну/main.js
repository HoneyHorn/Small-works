let pattern = 'aaa';

let userString = prompt('?');

if (Match(userString)) console.log('Good string!');
else console.log('False string!');
    


function Match(userString){
    if(Object.is(userString.length,pattern.length)){
        let newUserString = userString.split('');

        for (let letterIndex = 0, patternLetterIndex = 0; letterIndex < newUserString.length, patternLetterIndex < pattern.length; letterIndex++, patternLetterIndex++){

                switch (pattern[patternLetterIndex]){
                    case 'd':
                        if (!isFinite(newUserString[letterIndex])){
                            console.log('Instead of number another value');
                            return false;
                        }
                        break;
                    case 'a':
                        if (!newUserString[letterIndex].match(/^[a-z]+$/)){
                            console.log('Instead of letter another value');
                            return false;
                        }
                        break;
                    case '*':
                        if (!newUserString[letterIndex].match(/^[a-z]+$/) && !isFinite(newUserString[letterIndex])){
                            console.log('Instead of letter or number another value');
                            return false;
                        }
                        break;
                    case ' ':
                        if (!Object.is(newUserString[letterIndex],' ')){
                            console.log('Instead of space another value');
                            return false;
                        }
                        break;
                    default:
                        // Pattern error
                        console.log('Pattern error!');
                        return false; 
                }
        }
        return true;
    }
    else{
        console.log('Length error!');
        return false;
    }
}