
// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). 
// Then invoke the appropriate function for each of the following artists 
// and place the resulting object in the corresponding label array.

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old


const JumpStomp =[]
const Chatten = []
const Polar = []

createCountryArtist = (name, age, genre) => {
    return{
        "name": name,
        "age": age,
        "genre": genre 
    }
}

createPopArtist = (name, age, genre) => {
    return{
        "name": name,
        "age": age,
        "genre": genre 
    }
}

createFunkArtist = (name, age, genre) => {
    return{
        "name": name,
        "age": age,
        "genre": genre 
    }
}

createRapArtist = (name, age, genre) => {
    return{
        "name": name,
        "age": age,
        "genre": genre 
    }
}

createBluegrassArtist = (name, age, genre) => {
    return{
        "name": name,
        "age": age,
        "genre": genre 
    }
}

Chatten.push(createCountryArtist("Bruce Atkins", "23 years old", "country"),("Avilee Dallas", "19 years old", "country"));
Chatten.push(createBluegrassArtist("Bartholomew Danielson","23 years old", "bluegrass"));
JumpStomp.push(createFunkArtist("Dre Funkz", "25 years old", "funk"));
JumpStomp.push(createRapArtist("Dusta Grimes", "24 years old", "rap"), ("Loyoncé Branis", "27 years old", "rap"));
Polar.push(createPopArtist("Austin Kinkaid","22 years old", "pop"), ("jensen brown", "20 years old", "pop"));


console.log(Chatten);
console.log(JumpStomp);
console.log(Polar);