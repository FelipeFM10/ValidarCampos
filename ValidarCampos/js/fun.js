function validaCampo(){
   
	
	// validar o e-mail
	
	var email = document.getElementById('campoEmail');
	
	if(email.value == '') {
		    document.getElementById("erro").innerHTML= "Favor preencher o campo email";
			document.getElementById('erro').className = 'style-message';
			email.focus();
			return false;
	}

	if(email.value != 'felipe@gmail.com') {
		document.getElementById("erro").innerHTML= "Favor preencher o campo email";
		document.getElementById('erro').className = 'style-message';
		email.focus();
		return false;
}
	
	if(email.value.indexOf('@') == -1) {
		document.getElementById("erro").innerHTML= "Formato de email incorreto ";
		document.getElementById('erro').className = 'style-message';
			email.focus();
			return false;
	}
	
	if(email.value.indexOf('.') == -1) {
		document.getElementById("erro").innerHTML= "Formato de email incorreto ";
		document.getElementById('erro').className = 'style-message';
		email.focus();
		return false;
	}
	
	//Validar a senha

	var senha = document.getElementById('campoSenha');
	
	if(senha.value == '') {
		    document.getElementById("erro").innerHTML= "Favor preencher o campo senha";
			document.getElementById('erro').className = 'style-message';
			email.focus();
			return false;
	}

	if(senha.value != 'palmeiras') {
		document.getElementById("erro").innerHTML= "Favor preencher o campo senha";
		document.getElementById('erro').className = 'style-message';
		email.focus();
		return false;
}
	return true, alert('Logado'), document.getElementById("logado").innerHTML= "Logado";
	

}


function limpa(){
	document.getElementById('erro').innerHTML = "";
}
