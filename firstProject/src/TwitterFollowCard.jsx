export function TwitterFollowCard({userName, name}){
    return(
        <section>
         <header>
            
             <img className="tw--followed--img" src="devDuvan.jpg" alt="perfil"></img>
             <article>
                 <strong> {name}</strong>
                 <span>@{userName}</span>
             </article>
             <aside>
                 <button>
                     Seguir
                 </button>
             </aside>
 
         </header> 
        </section>
     )
}