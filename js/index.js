document.addEventListener("DOMContentLoaded", function() {

    // slå dig løs her... 

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    
    services.forEach(service => console.log(service.headline))
    
    //--variabler
    let hero_section = document.querySelector(".hero")
    let services_section = document.querySelector(".services");
    let facilities_section = document.querySelector(".facilities")
    let sites_section = document.querySelector(".sites")
    let advantages_section = document.querySelector(".advantages")


//--hero
    


    
//-- services
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


    //--facilities
    let facilities_headline = document.createElement("h2")
    facilities_headline.textContent = facilities.headline
    facilities_section.appendChild(facilities_headline)

    facilities.options.forEach(element => {

        
        let billede = document.createElement("img");
        let title = document.createElement("h2");
        let kort_tekst = document.createElement("p");
        let container = document.createElement("div")
    
        billede.src = element.icon;
        title.textContent = element.headline;
        kort_tekst.textContent = element.text
       
        
        container.appendChild(billede)
        container.appendChild(title)
        container.appendChild(kort_tekst)
        

        facilities_section.append(container);
    })
        
    
    
    

    
    
}) // DOMContentLoaded slut