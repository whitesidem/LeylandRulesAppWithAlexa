function myRandomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

        var random =  myRandomInt (1,3);

        if(random===1){
            console.log(':tell', "You didn't, <p>you didn't!</p>");
        }   
        else {
            console.log(':tell',"<p>Rhianna didn't</p><p>Mummy didn't</p><p>Nathan didn't</p>")
        } 