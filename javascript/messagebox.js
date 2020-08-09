function open_tab(user)
{
    document.getElementById("chatbox").style.removeProperty("display");
    document.getElementById("chatname").innerHTML=user;
    document.getElementById("chatpic").src="images/"+user+".jpg";
}

function close_tab()
{
    document.getElementById("chatbox").style.setProperty("display","none");
}