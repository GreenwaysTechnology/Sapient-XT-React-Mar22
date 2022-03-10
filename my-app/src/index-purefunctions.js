//Pure functions :2nd rule

//Impure function : it changes the input parameter
function updateProfile_(profile, city) {
    //update city and return updated profile object: 
    profile.city = city
    return profile;
}
//Pure function : i need to change the input parameter but it should be pure.
function updateProfile(profile, city) {
    //update city and return updated profile object: 
    //return new Object ,by copying all properties ,with updated

    //in order to return new Object we have many synatx
    //old syntax : we copy object properties manually 
    // return {
    //     id: profile.id,
    //     name: profile.name,
    //     city: city
    // }
    //2nd syntax:
    // return Object.assign({}, profile, { city: city })
    //3rd syntax: spread notation
    return { ...profile, city }
}

let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Chennai'
}
// console.log('Before Update', profile)
// console.log('After Update', updateProfile(profile, 'Coimbatore'))
let updatedProfile = updateProfile(profile, 'Coimbatore')
console.log(profile === updatedProfile ? "Same Object " : " Different Object")

//arrays and immutatblity
//impure
// function addTodo(todos, newTodo) {
//     return todos.push(newTodo)
// }
//pure : how to return array immutable
function addTodo(todos, newTodo) {
    //return todos.concat(newTodo)
    return [...todos,newTodo]
}
let todos = [{
    title: 'Learn react',
    done: true
}];

Object.freeze(todos)
console.log(addTodo(todos, { title: 'Learn Pure functions', done: false }))

