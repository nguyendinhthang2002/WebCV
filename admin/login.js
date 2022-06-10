// check validation Account
function CheckOnblurAccount(){
    var Node=document.getElementById('myForm');
    var account=document.getElementById('account').value;
    var errorAcount=document.getElementById('errorAccount');
    // biểu thức chính quy ktra tài khoản   (a-z), số (0-9), dấu gạch dưới hoặc dấu gạch nối. 
    var regex = /^[a-z0-9_-]{3,16}$/;

    if(account==''){
        errorAcount.innerHTML='bạn chưa nhập tài khoản!';
        errorAcount.style.color='red';
        Node.classList.add('invalidAccount');
        Node.classList.remove('validAccount');
    }else if(!regex.test(account)){
        errorAcount.innerHTML='Tên Tk phải bắt đầu bằng (a-z) hoặc số (0-9)!';
        errorAcount.style.color='red';
        Node.classList.add('invalidAccount');
        Node.classList.remove('validAccount');
    }else{
        errorAcount.innerHTML='';
        Node.classList.remove('invalidAccount');
        Node.classList.add('validAccount');

    }
}

// check validation PassWord
function CheckOnblurPass(){
    var Node=document.getElementById('myForm');
    var password=document.getElementById('password').value;
    var errorPassword=document.getElementById('errorPassword');

    // biểu thức chính quy cho pass yc tối thiếu tám ký tự.it nhất chữ cái  hoặc số 
    var regex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(password==''){
        errorPassword.innerHTML='Bạn chưa nhập mật khẩu!';
        errorPassword.style.color='red';
        Node.classList.add('invalidPass');
        Node.classList.remove('validPass');
    }else if(!regex.test(password)){
        errorPassword.innerHTML='Mật khẩu tối thiểu phải có 8 ký tự, ít nhất 1 chữ cái,1 số!';
        errorPassword.style.color='red';
        Node.classList.add('invalidPass');
        Node.classList.remove('validPass');
    }else{
        errorPassword.innerHTML='';
        Node.classList.remove('invalidPass');
        Node.classList.add('validPass');
    }
}


// check button
// declare Correct Account and Pass (AP)

function CheckAP(){
    var adminAccount='admin123';
    var adminPass='admin123';
    
    var input=document.getElementsByTagName('input');
    console.log(input)

    var input0=input[0].value;
    var input1=input[1].value;
    console.log(input0);
    console.log(input1);


    // thay đổi thuộc tính nếu nó đúng
    if(input0==''||input1==''){
        alert('Bạn phải nhập đầy đủ tài khoản hoặc mật khẩu!');
    }else if(input0==adminAccount&&input1!=adminPass){
        alert('Tài khoản hoặc mật khẩu không chính xác!')
    }else if(input0!=adminAccount&&input1==adminPass){
        alert('Tài khoản hoặc mật khẩu không chính xác!')
    }else if(input0==adminAccount&&input1==adminPass){
        alert('Đăng Nhập Thành Công.');
        location.href = "http://127.0.0.1:5500/home";
    }else{
        alert('tài khoản hoặc mật khẩu không chính xác.')
    }
}