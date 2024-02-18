type="application/javascript"
    const biletter=[];
    function visbilletter(){
    // utskrift
    let ut =
    "<table><tr>" +
    "<th>film</th><th>antall</th><th>Navn</th><th>etternavn</th><th>Adresse</th><th>Telefonnr</th>" +
    "</tr>";
    for (let p of biletter){
    ut+="<tr>";
    ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.navn+"</td><td>"+p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td>";
    ut+="</tr>";
}
    document.getElementById("biletter").innerHTML=ut;

}
    //registrering av input med inoutvalidering
    function registrer(){
    const film =document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    if (antall==""){
    alert("skriv inn antall")
    return false;
}
    if (antall==0){
    alert("skriv inn en større verdi")
    return false;
}

    const navn = document.getElementById("navn").value;
    if (navn==""){
    alert("Fornavn må fylles ut")
    return false;
}
    const etternav =document.getElementById("etternavn").value;
    if (etternav==""){
    alert("Etternavn må fylles ut")
    return false;
}
    const adresse = document.getElementById("adresse").value;
    if ((adresse.includes("@"))==false){
    alert("skriv gyldig epost")
    return false;
}
    const telefonnr = document.getElementById("telefonnr").value;
    if (telefonnr.length!=8){
    alert("Skriv et telefonummer")
    return false;
}

    const person = {
    film : film,
    antall : antall,
    navn : navn,
    etternav : etternavn,
    adresse : adresse,
    telefonnr : telefonnr
};

    biletter.push(person);
    //sletting av inouttdata og skrive ut
    document.getElementById("film").value="";
    document.getElementById("antall").value="";
    document.getElementById("navn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("adresse").value="";
    document.getElementById("telefonnr").value="";
    visbilletter()}