let dayOfWeek = 'Wednesday';

switch (dayOfWeek.toLowerCase()) {
    case 'monday':
        console.log(`Today is ${dayOfWeek}! First day of the week.`);
        break;
    case 'tuesday':
        console.log(`Today is ${dayOfWeek}! Second day of the week.`);
        break;
    case 'wednesday':
        console.log(`Today is ${dayOfWeek}! Third day of the week.`);
        break;
    case 'thursday':
        console.log(`Today is ${dayOfWeek}! Forth day of the week.`);
        break;
    case 'friday':
        console.log(`Today is ${dayOfWeek}!Fift day of the week.`);
        break;
    case 'saturday':
        console.log(`Today is ${dayOfWeek}!Sixth day of the week.`);
        break;
    case 'sunday':
        console.log(`Today is ${dayOfWeek}!Last day of the week.`);
        break;
    default:
        console.log("Wrong input!");
}

