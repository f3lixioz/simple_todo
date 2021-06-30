import {useEffect, useState} from "react";

const Categories=()=>{

    let [categories,setCategories] = useState(['default']);

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3001/categories`);
        const data = await response.json();
        const temp = [];
        const temp2 = await data.forEach(element => {
            temp.push(<p>{element.name}</p>);
        })
        setCategories(temp);
    };
    

    useEffect(() => {
        fetchData();
    }, []);
    
      
    return(<div>{categories}</div>);
}

export default Categories;