// Object with properties
const person = {
    Name: "Ranjit",
    Designation: "Professor",
    DOB : 27051991;
};

// Loop through the properties of the object
for (let i in person)
{
    console.log(` ${i}: ${person[i]}`);
    //console.log("%s", person[i])
}
