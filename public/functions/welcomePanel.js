function startFirstWelcomePanel(){

    console.log("lefutott a defer script");

    const myCookie = document.cookie
    // console.log(document.cookie)
    // console.log(typeof document.cookie)

    if(myCookie !== "name=firstRun"){

        // console.log('isRanedScript Belépett az if blokba')
        document.cookie="name=firstRun; SameSite=Strict; max-age=3600";  // Óránkénti figyelmezető üzenet
    
        const bodyEl = document.getElementById('body-element');
        
        const alertDiv = document.createElement('div');
    
        bodyEl.append(alertDiv);
    
        alertDiv.classList.add('alert-panel-of-first-use');
        const h1text = 'Figyelem!'
        const pText1 = 'Ez a weboldal fejlesztés alatt áll!';
        const pText2 = 'Az eredeti oldalra navigáláshoz kattints a piros gombra';
        const pText3 = 'A készülő oldal megtekintéséhez kattints a kék gombra';
    
        const newH1El = document.createElement('h1');

        const newP1El = document.createElement('p');
        const newP2El = document.createElement('p');
        const newP3El = document.createElement('p');

        const newBtn = document.createElement('button');
        const newBtn2 = document.createElement('button');

        newBtn.classList.add('btn')
        newBtn.classList.add('btn-primary');

        newBtn2.classList.add('btn');
        newBtn2.classList.add('btn-danger');

    
        
        
        
        
        alertDiv.append(newH1El);
        alertDiv.append(newP1El);
        alertDiv.append(newP2El);
        alertDiv.append(newP3El);
        alertDiv.append(newBtn);
        alertDiv.append(newBtn2);
        
        newH1El.innerText = h1text;
        newP1El.innerText = pText1;
        newP2El.innerText = pText2;
        newP3El.innerText = pText3;
        newBtn.innerText = 'Megértettem, maradok a teszt oldalon';
        newBtn2.innerText = 'Tovább az eredeti oldalra';
    
        
    
        // console.log(alertDiv);
    
        newBtn.addEventListener('click',()=>{
    
            alertDiv.remove();
        })

        newBtn2.addEventListener('click',()=>{
        window.location = 'https://www.xvi-ne.hu/'   
        })

    }



  
}

startFirstWelcomePanel();

