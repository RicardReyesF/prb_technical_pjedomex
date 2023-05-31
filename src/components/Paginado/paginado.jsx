export function Paginado({characters,charactersForPage,paginado,current,prevPaginado,nextPaginado, charactersName}){
    let pageN= [];
    let pagesPagination = characters/charactersForPage
    console.log(pagesPagination);
    let pages = Math.ceil(pagesPagination)
    
    for (let i = 1; i <= pages; i++) {
        pageN.push(i);
        
    }
    console.log(pageN);
    return(
        <nav>
            <ul style={{ listStyle: "none", textAlign: "center" }}>
            <button onClick={() => prevPaginado()} disabled={  current === 1 ? true : false }>anterior...</button>
                {
                    
                    pageN?.map(nume =>(
                        
                        <li style={{ display: "inline-block", marginRight: "10px" }} key={nume}>
                            
                                <a  onClick={() => paginado(nume)}>{nume}</a> 
                                
                        </li>
                    ))
                }
                <button onClick={() => nextPaginado()} disabled={  current === 10 ? true : false }>siguiente...</button>
            </ul>
        </nav>
    )

}