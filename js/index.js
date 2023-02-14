document.addEventListener("DOMContentLoaded", function() {

    // slå dig løs her... 

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

    
    let services_section = document.querySelector(".services");


    

    services.forEach((service) => {
        let card = document.createElement("section");
        card.setAttribute("class", "services_card");
        let billede = document.createElement("img");
        let title = document.createElement("h2");
        let kort_tekst = document.createElement("p");
        let kort_link = document.createElement("a");

        billede.src = service.illustration;
        title.textContent = service.headline;
        kort_tekst.textContent = service.text;
        kort_link.textContent = service.linktext;
        
        card.append(billede);
        card.append(title);
        card.append(kort_tekst);
        card.append(kort_link);
        services_section.append(card);
    
    
    } )
}) // DOMContentLoaded slut