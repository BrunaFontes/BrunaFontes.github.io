function ApenasLetras(e)
{
	var tecla=new Number();
	if(window.event) {
		tecla = e.keyCode;
	}
	else if(e.which) {
		tecla = e.which;
	}
	else {
		return true;
	}
	if((tecla >= "48") && (tecla <= "57")){
		return false;
	}
}

function Limpar()
{
	document.getElementById("nome").value="";
	document.getElementById("data").value="";
	document.getElementById("email").value="";
	document.getElementById("assunto").value="";
	document.getElementById("mensagem").value="";	
}

function formuValida (){
	var n = document.getElementById("nome").value.length;
	var e = document.getElementById("email").value.length;
	var d = document.getElementById("data").value.length;
	var a = document.getElementById("assunto").value.length;
	var m = document.getElementById("mensagem").value.length;
	if(n < 3 || e < 5 || d < 8 || a < 0 || m < 0){
		alert('Por favor, preencha todos os campos corretamente!');
		document.getElementById("nome").focus();
		return false
	}
	else{
		confirmarEnviar();
	}
}

function confirmarEnviar()
{
	alert("Sua mensagem foi enviada com sucesso!");
	Limpar();
}

function confirmarCancelar()
{
var x;
var r=confirm("Deseja mesmo cancelar?");
if (r==true)
  {
	Limpar();
  }
}