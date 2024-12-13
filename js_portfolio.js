function login()
{
    var password = prompt( "Veuillez entrer le mot de passe pour accéder à cette page", "" );
    // si un mot de passe a été entré
    if ( password != null )
    {
    	// on le compare à celui attendu
    	if ( password == "Glados" )
    	{
    	    // mot de passe valide, on ouvre la page secrète
    	    document.location.href = "D:\nouveau\portfolio\document.html";
        }
        else
        {
            alert( "Mot de passe incorrect!", "Erreur" );
        }
    }
}