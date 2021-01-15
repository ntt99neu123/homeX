function nameSubmitHandler(){
   let name = document.getElementById('name').value
document.getElementById('saveName').value = name
}
function nameChangeHandler() {
    let saveName = document.getElementById('saveName').value
    document.getElementById('name').value = saveName
}
for (let apartment of model.apartments) {
    let id = `link-users-${apartment.owner}`
    let a = document.getElementById(id)


    if (firebase.auth().currentUser) {
        a.onclick = function () {
            view.showComponent('account-fixed', { id: apartment.owner })
        }
     
    }
    
        
}