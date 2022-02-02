import input from 'input';

async function main() {
    const driving = 18
    const myAge = await input.text('What age are you?');
if (myAge >= driving) {
    console.log('You can drive!')
} else {
    console.log('You can not drive!')
} 

}

main();