import input from 'input';

async function main() {
    const driving = 18
    const myAge = await input.text('What age are you?');
    const hasLicense = await input.confirm('Do you have your license?');
    if (myAge >= driving && hasLicense) {
        console.log('You can drive!')
    } else 
        console.log('You can not drive!')
    if (myAge<driving) {
        console.log(`Wait ${driving - myAge} years.`)
    }

}

main();