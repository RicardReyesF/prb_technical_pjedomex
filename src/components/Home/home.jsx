import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../redux/actions";
import { Paginado } from "../Paginado/paginado";

 export function Home () {

    const dispatch = useDispatch()

    const characters = useSelector( (state) => state.allCharacter.slice(0,10))
    

    useEffect(() => {
        dispatch( getAllCharacters())
    },[dispatch])


    
    const [currentPage,setCurrentPage] = useState(1);
    const [characterForPage,setCharacterForPage] = useState(1);
    const lastCharacter = currentPage * characterForPage;
    const firstCharacter= lastCharacter - characterForPage;

    const currentCharacter = characters.slice(firstCharacter,lastCharacter);

    const paginado = (numberPage) => {
        setCurrentPage(numberPage)
    }


    const nextPaginado = () => {
        
        const allCharacter = characters.length
        const next = currentPage + 1;
        const firstNext = next * characterForPage;
        console.log(next)
        setCurrentPage(next);
        if (firstNext === allCharacter) return;
    }

    const prevPaginado = () => {
        
        const prev = currentPage - 1
        console.log(prev)
        setCurrentPage(prev)
        if (currentPage === 1) return; 
    }

    return (
        <center>
            <div>
            <div>
            <Paginado nextPaginado={nextPaginado} prevPaginado={prevPaginado} characters={characters.length} charactersForPage={characterForPage} paginado={paginado} current={currentPage} charactersName={characters}/>
            {
                currentCharacter.map( (ch) => {
                    return(
                            <div style={{  paddingTop: "70px" }}> 
                            <img src={ch.image} style={{ objectFit: "contain" }}/> 
                            <div style={{ padding: "2px 16px" , backgroundColor: "beige", width: "268px"} }>
                                <h4>{ch.name}</h4>
                                <h4>{ch.status}</h4>
                                <h4>{ch.species}</h4>

                            </div>

                        </div>
                    
                    )
                        
                })   
            }
            

            </div>
        </div>
        </center>
        
        
    )
}


