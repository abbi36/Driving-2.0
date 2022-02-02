import input from 'input';


async function main() {
    const drivingAge = 18
    let toContinue = true;

    while (toContinue) { 
        const age = await input.text('What is your age');
        const hasLicense = await input.confirm('Do you have your license');

        if(age >= drivingAge && hasLicense) {
            console.log('They can drive!');
        } else {
            if (age < drivingAge) {
                console.log(`Please wait ${drivingAge - age} years.`);
        } else {
                console.log('They need their license!');
        }
        }
        toContinue = await input.text('Do you wish to continue?');
    }
}
main();