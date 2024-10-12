// Function to demonstrate switch-case
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }
    console.log(`Day ${dayNumber}: ${dayName}`);
}

// Test cases
getDayName(1); // Day 1: Sunday
getDayName(4); // Day 4: Wednesday
getDayName(7); // Day 7: Saturday
getDayName(0); // Day 0: Invalid day number
getDayName(9); // Day 9: Invalid day number