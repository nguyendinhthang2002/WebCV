function resetInput(){
  document.getElementById("name").value = ""
  document.getElementById("address").value = ""
  document.getElementById("contact").value = ""
  document.getElementById("position").value = ""
}

function emailIsValid(email){
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

function validateInput(){
  let formElement = document.querySelector(".form")
  let inputElement = formElement.querySelectorAll(".form-input")
  for(let i = 0; i < inputElement.length; i++){
      if(inputElement[0].value===""){
        inputElement[0].parentElement.querySelector(".error-message").innerText = `Vui lòng nhập tên!`
      }else{
        inputElement[0].parentElement.querySelector(".error-message").innerText = ''
      }if(inputElement[1].value===""){
        inputElement[1].parentElement.querySelector(".error-message").innerText = `Vui lòng nhập địa chỉ!`
      }else{
        inputElement[1].parentElement.querySelector(".error-message").innerText = ''
      }if(inputElement[2].value==="" || !emailIsValid(inputElement[2].value)){
        inputElement[2].parentElement.querySelector(".error-message").innerText = `Vui lòng nhập đúng phương thức liên hệ!`
      }else{
        inputElement[2].parentElement.querySelector(".error-message").innerText = ''
      }if(inputElement[3].value===""){
        inputElement[3].parentElement.querySelector(".error-message").innerText = `Vui lòng nhập chức vụ!`
      }else{
        inputElement[3].parentElement.querySelector(".error-message").innerText = ''
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
      let name = document.getElementById("name").value
      let address = document.getElementById("address").value
      let contact = document.getElementById("contact").value
      let position = document.getElementById("position").value
      let listMember = localStorage.getItem("list-member") ? JSON.parse(localStorage.getItem("list-member")) : []
      listMember.push({
          name: name,
          address: address,
          contact: contact,
          position: position
      })
      //list-member=key, JSON.parse(localStorage.getItem("list-member")=mã hóa
      localStorage.setItem("list-member", JSON.stringify(listMember))
      renderMember()
      resetInput()
  }
}

function renderMember(){
  let listMember = localStorage.getItem("list-member") ? JSON.parse(localStorage.getItem("list-member")) : []
  let member = `<tr>
                      <th>ID</th>
                      <th>Tên</th>
                      <th>Địa chỉ</th>
                      <th>Liên hệ</th>
                      <th>Chức vụ</th>
                      <th>Hành động</th>
                  </tr>`
  listMember.map((value, index)=>{
      member += `<tr>
                      <td>${index + 1}</td>
                      <td>${value.name}</td>
                      <td>${value.address}</td>
                      <td>${value.contact}</td>
                      <td>${value.position}</td>
                      <td>
                          <button onclick="editMember(${index})">Sửa</button>
                          <button onclick="deleteMember(${index})">Xóa</button>
                      </td>
                  </tr>`
  })

  document.getElementById("tableContent").innerHTML = member
}


function editMember(index) {
  //console.log(index)
  let listMember = localStorage.getItem("list-member") ? JSON.parse(localStorage.getItem("list-member")) : []
  document.getElementById("name").value = listMember[index].name
  document.getElementById("address").value = listMember[index].address
  document.getElementById("contact").value = listMember[index].contact
  document.getElementById("position").value = listMember[index].position
  document.getElementById("index").value = index

  document.getElementById("save").style.display = "none"
  document.getElementById("update").style.display = "inline-block"
}

function changeMember() {
  let listMember = localStorage.getItem("list-member") ? JSON.parse(localStorage.getItem("list-member")) : []
  let index = document.getElementById("index").value
  listMember[index]={
      name: document.getElementById("name").value,
      address: document.getElementById("address").value,
      contact: document.getElementById("contact").value,
      position: document.getElementById("position").value
  }
  localStorage.setItem("list-member", JSON.stringify(listMember))
  document.getElementById("save").style.display = "inline-block"
  document.getElementById("update").style.display = "none"
  renderMember()
  resetInput()
}

function deleteMember(index){
  let listMember = localStorage.getItem("list-member") ? JSON.parse(localStorage.getItem("list-member")) : []
  if(confirm("Bạn có chắc chắn muốn xóa?")){
      listMember.splice(index, 1)
  }
  localStorage.setItem("list-member", JSON.stringify(listMember))
  renderMember()
}