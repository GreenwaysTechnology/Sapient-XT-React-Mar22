//sequential calls in blocking mode 

function getUser(){
    return {
        id:1,
        name:'admin'
    }
}
function login(user){
   if(user.name === 'admin'){
       return true
   }
   return false
}
function main(){
  //flow 
  let user = getUser()
  let status = login(user)
  console.log(status ? "Login success" : "Login failed")
}
main();