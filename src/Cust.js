import {faker} from '@faker-js/faker'

const Customers =[
    {
    "key": 0,
    "pic" : faker.image.url(),
    "devName" : faker.company.name(),
    "devDesc" : faker.company.catchPhrase(),
    "stars" : Math.floor(Math.random()*6)
    },
    {"key": 1,
    "pic" : faker.image.url(),
    "devName" : faker.company.name(),
    "devDesc" : faker.company.catchPhrase(),
    "stars" : Math.floor(Math.random()*6)
    },
    {"key": 2,
    "pic" : faker.image.url(),
    "devName" : faker.company.name(),
    "devDesc" : faker.company.catchPhrase(),
    "stars" : Math.floor(Math.random()*6)
    }]

export default Customers