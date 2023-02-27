function hienthi(value){
    document.getElementById("KetQua").value +=value;
}
function xoahet(){
    document.getElementById("KetQua").value =" ";
}
function tinhtoan(){
    var tinhtoan=document.getElementById("KetQua").value;
    var tinhtoan = eval(tinhtoan);
    document.getElementById("KetQua").value=tinhtoan;
}
