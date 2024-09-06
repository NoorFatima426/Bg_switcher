const buttons=document.querySelectorAll(".buttons");
const body=document.querySelector("body");
buttons.forEach( function (button) {
    button.addEventListener( 'click', function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id==='pink'){
            body.style.backgroundColor=e.target.id;
            body.style.transition='2.5s';
        }
        if(e.target.id==='plum'){
            body.style.backgroundColor=e.target.id;
            body.style.transition='2.5s';
        }
        if(e.target.id==='paleturquoise'){
            body.style.backgroundColor=e.target.id;
            body.style.transition='2.5s';
        }
        if(e.target.id==='palegreen'){
            body.style.backgroundColor=e.target.id;
            body.style.transition='2.5s';
        }
        if(e.target.id==='peachpuff'){
            body.style.backgroundColor=e.target.id;
            body.style.transition='2.5s';
        }
        if(e.target.id==='peru'){
            body.style.backgroundColor=e.target.id;
            body.style.transition='2.5s';
        }
        if(e.target.id==='olive'){
            body.style.backgroundColor=e.target.id;
            body.style.transition='2.5s';
        }
        if(e.target.id==='teal'){
            body.style.backgroundColor=e.target.id;
            body.style.transition='2.5s';
        }
        if(e.target.id==='gold'){
            body.style.backgroundColor=e.target.id;
            body.style.transition='2.5s';
        }
        if(e.target.id==='reset'){
            body.style.backgroundColor='#FFFFFF';
            body.style.transition='1s';
        }
    });
} );