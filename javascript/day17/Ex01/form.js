
document.querySelector('form').addEventListener('submit', validateForm)

function validateForm(event) {

  event.preventDefault()
  let firstname = document.getElementById("firstname").value.trim()
  let name = document.querySelector("#name").value.trim()
  
  //console.log(name)
  //console.log(firstname)
  
  try 
  {
    if (!firstname)
      throw('firstname is mandatory')
    if (!name)
      throw ('Name is mandatory');
    window.alert('There were no mistakes')
  } catch (error) {

    window.alert(error)
    
  }
}