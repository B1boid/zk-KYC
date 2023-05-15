import {FIRST_NAMES} from "./data/first-names";
import {LAST_NAMES} from "./data/last-names";
import {REMOVE_COUNTRIES} from "./data/prohibited-countries";
import {COUNTRIES} from "./data/countries";
import {SUS_LAST_NAMES} from "./data/susp-last-names";

function getRandom (list) {
    return list[Math.floor((Math.random()*list.length))];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function generatePerson(passKYC){
    let firstNames = FIRST_NAMES
    let lastNames = LAST_NAMES
    let countries = COUNTRIES
    let prohibitedCountries = REMOVE_COUNTRIES
    let susLastNames = SUS_LAST_NAMES
    let okLastNames = lastNames.slice(30)
    let subLastNames = lastNames.slice(0, 40)
    let subCountries = countries.slice(15)
    let okCountries = countries.filter(n => !prohibitedCountries.includes(n))

    if (passKYC){
        return {
            person: {
                firstName: getRandom(firstNames),
                lastName: getRandom(okLastNames),
                country: getRandom(okCountries)
            },
            features: {
                f1: 0,
                f2: 0,
                f3: 0,
                f4: getRndInteger(40, 99),
                f5: getRndInteger(3, 8)
            },
            estimate: {
                f1: false,
                f2: false,
                f3: false,
                f4: false,
                f5: false
            }
        }
    }

    let person = {
        firstName: getRandom(firstNames),
        lastName: getRandom(subLastNames),
        country: getRandom(subCountries)
    }
    let features = {
        f1: susLastNames.includes(person.lastName) ? 1 : 0,
        f2: prohibitedCountries.includes(person.country) ? 1 : 0,
        f3: getRndInteger(0, 1),
        f4: getRandom([1, 2, 3, 4, getRndInteger(180, 200)]),
        f5: getRandom([10, 10, getRndInteger(1, 9)])
    }

    return {
        person: person,
        features: features,
        estimate: {
            f1: features.f1 === 1,
            f2: features.f2 === 1,
            f3: features.f3 === 1,
            f4: features.f4 < 5,
            f5: features.f5 === 10
        }
    }

}
