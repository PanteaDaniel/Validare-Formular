function checkInfo()
{
  try
  {
    /*fname = document.forms["form"]["fname"].value;
    lname = document.forms["form"]["lname"].value;
    email = document.forms["form"]["email"].value;
    tel = document.forms["form"]["tel"].value;
    pic = document.forms["form"]["pic"].value;*/
    var mistake="";
    if(checkName("lname")==false)
      mistake+="Nume Invalid!<br>";
    if(checkName("fname")==false)
      mistake+="Prenume Invalid!<br>";
    if(checkEmail() == false)
      mistake+="Email Invalid!<br>";
    if(checkTel() == false)
      mistake+="Telefon Invalid!<br>";
    if(checkPic() == false)
      mistake+="Poza Invalida!<br>";
    if(mistake!="")
      {
        document.getElementById("warning").style.display="block";
        document.getElementById("warning").innerHTML=mistake;

        return false;
      }
    else
    {
      document.getElementById("warning").style.display="none";
      document.getElementById("completeMessage").style.display = "block";
      document.getElementById("form").style.display = "none";
      return true;
    }
  }
  catch (e)
  {
    alert(e);
  }
}
function validateNumber(tel)
{
  var re = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/;
  return (re.test(tel) );
}
function validateEmail(email)
{
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
}
function validateName(name)
{
  var re = /^[A-Za-z-'.]+$/;
  return (re.test(name) && name.length > 1 && name.charAt(name.length-1) != "-");
}
function validatePic()
{

  var file = document.getElementById('pic').files[0];
  var fileName = document.getElementById('pic').value;

  if(file.size > 2000000)
    return false;
}
function checkName(nameId)
{
  var name=document.getElementById(nameId).value;

  if(validateName(name)==false)
  {
    document.getElementById(nameId).style.border = "1px solid red";
    return false;
  }
  else
    {
      document.getElementById(nameId).style.border = "1px solid #a9a9a9";
      return true;
    }
}
function checkEmail()
{
  email = document.getElementById("email").value;

  if(validateEmail(email)==false)
  {
    document.getElementById("email").style.border = "1px solid red";
    return false;
  }
  else
  {
    document.getElementById("email").style.border = "1px solid #a9a9a9";
    return true;
  }
}
function checkTel()
{
  tel = document.getElementById("tel").value;

  if(validateNumber(tel)==false)
  {
    document.getElementById("tel").style.border = "1px solid red";
    return false;
  }
  else
  {
    document.getElementById("tel").style.border = "1px solid #a9a9a9";
    return true;
  }
}
function checkPic()
{

  if(document.getElementById('pic').value != "")
  {
    var re = /\.(gif|jpg|jpeg|tiff|png)$/i;
    if(!re.test(document.getElementById('pic').value))
    {
      document.getElementById("pic").style.border = "1px solid red";
      document.getElementById("pic").title = "Extensie invalida";
      return false;
    }
    else if(validatePic()==false)
    {

      document.getElementById("pic").style.border = "1px solid red";
      document.getElementById("pic").title = "fisier prea mare: trebuie sa fie mai mic de 2MB";
      return false;
    }
    else
    {
      document.getElementById("pic").style.border = "1px solid #a9a9a9";
      document.getElementById("pic").title = "";
      return true;
    }
  }
  else
  {
    document.getElementById("pic").title = "No file chosen"
    document.getElementById("pic").style.border = "1px solid red";
    return false;
  }
}
