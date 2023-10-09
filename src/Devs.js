import {faker} from '@faker-js/faker'

const Developers =[
    {
    "key": 0,
    "pic" : faker.image.avatar(),
    "devName" : faker.person.fullName(),
    "devDesc" : faker.person.jobTitle(),
    "stars" : Math.floor(Math.random()*6)
    },
    {"key": 1,
        "pic" : faker.image.avatar(),
    "devName" : faker.person.fullName(),
    "devDesc" : faker.person.jobTitle(),
    "stars" : Math.floor(Math.random()*6)
    },
    {"key": 2,
        "pic" : faker.image.avatar(),
    "devName" : faker.person.fullName(),
    "devDesc" : faker.person.jobTitle(),
    "stars" : Math.floor(Math.random()*6)
    }]

export default Developers