

let ramaObject ={
    name : 'Ram',
    age : '25',
    yuga : 'Treta'
}

let krishnaObject ={
    name : 'Krishna',
    age : '31',
    yuga : 'Dwapar'
}

const ageValidator =(object1, object2) =>{
    return (object1.age > object2.age ? object1.name : object2.name )
}

console.log(ageValidator(ramaObject, krishnaObject))