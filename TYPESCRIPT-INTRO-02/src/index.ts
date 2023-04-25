

interface obj1{
    title :string,
    status : boolean,
    id : number
}


interface obj2 extends obj1{
    firstName :string,
    lastName ?: string
}
let newObj:obj2={
    firstName :'sagar',
    id:21,
    title : "frontEnd",
    status :true
}
function getName(newObj){
    return newObj.firstName + newObj.lastName
}



interface Address{
    houseNumber : string | number,
    street : string |number,
    city : string,
    state :string,
    postalCode : number,
    country :string,
}


interface PersonalDetails{
    phones : number[],
    address :string [],
    email?: string | number,
    firstName : string,
    lastName : string,
    middleName? :string
}



