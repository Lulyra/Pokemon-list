import React, {useState,createContext, useContext} from 'react'

const PageContext = createContext();

const PageContextProvider = (props) => {
    const [page,setPage] = useState(0);

    async function handlePageChange(event){
        await event.persist();
        setPage(prev => event.target.name === 'next' ? prev + 1 : prev - 1)
    }
    async function setGoPage(event){
        await event.persist();
        console.log(event.target.value);
        setPage(Number(event.target.value))
    }

    return(
        <PageContext.Provider value={{page, handlePageChange, setGoPage}}>
		{props.children}
	  </PageContext.Provider>
    )
};

export {PageContext, PageContextProvider}