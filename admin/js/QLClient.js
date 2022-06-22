function resetInput(){
    document.getElementById("account").value = ""
    document.getElementById("password").value = ""
  }
  
  function validateInput(){
    let formElement = document.querySelector(".form")
    let inputElement = formElement.querySelectorAll(".form-input")
    for(let i = 0; i < inputElement.length; i++){
        if(inputElement[i].value===""){
            inputElement[i].parentElement.querySelector(".error-message").innerText = `please enter ${inputElement[i].id}!`
        }else{
            inputElement[i].parentElement.querySelector(".error-message").innerText = ''
        }
    }
  }
  
  function addNew(){
    validateInput()
    let formElement = document.querySelector(".form")
    let errorElement = formElement.querySelectorAll(".error-message")
    let arrErrorElement = []
    for (let i = 0; i < errorElement.length; i++) {
        arrErrorElement.push(errorElement[i].innerText)
    }
    let checkErrorElement = arrErrorElement.every(value=>value === "")
    if(checkErrorElement){
        //save data
        let account = document.getElementById("account").value
        let password = document.getElementById("password").value
        let listClient = localStorage.getItem("list-client") ? JSON.parse(localStorage.getItem("list-client")) : []
        listClient.push({
            account: account,
            password: password
        })
        localStorage.setItem("list-client", JSON.stringify(listClient))
        renderClient()
        resetInput()
    }
  }
  
  function renderClient(){
    let listClient = localStorage.getItem("list-client") ? JSON.parse(localStorage.getItem("list-client")) : []
    let client = `<tr>
                        <th>ID</th>
                        <th>Account</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>`
    listClient.map((value, index)=>{
        client += `<tr>
                        <td>${index + 1}</td>
                        <td>${value.account}</td>
                        <td>${value.password}</td>
                        <td>
                            <button onclick="editClient(${index})">Edit</button>
                            <button onclick="deleteClient(${index})">Delete</button>
                        </td>
                    </tr>`
    })
  
    document.getElementById("tableContent").innerHTML = client
  }
  
  
  function editClient(index) {
    //console.log(index)
    let listClient = localStorage.getItem("list-client") ? JSON.parse(localStorage.getItem("list-client")) : []
    document.getElementById("account").value = listClient[index].account
    document.getElementById("password").value = listClient[index].password
    document.getElementById("index").value = index
  
    document.getElementById("save").style.display = "none"
    document.getElementById("update").style.display = "inline-block"
  }
  
  function changeClient() {
    let listClient = localStorage.getItem("list-client") ? JSON.parse(localStorage.getItem("list-client")) : []
    let index = document.getElementById("index").value
    listClient[index]={
        account: document.getElementById("account").value,
        password: document.getElementById("password").value
    }
    localStorage.setItem("list-client", JSON.stringify(listClient))
    document.getElementById("save").style.display = "inline-block"
    document.getElementById("update").style.display = "none"
    renderClient()
    resetInput()
  }
  
  function deleteClient(index){
    let listClient = localStorage.getItem("list-client") ? JSON.parse(localStorage.getItem("list-client")) : []
    if(confirm("Bạn có chắc chắn muốn xóa?")){
        listClient.splice(index, 1)
    }
    localStorage.setItem("list-client", JSON.stringify(listClient))
    renderClient()
  }