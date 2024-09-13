import clsx from "clsx";
import search from "./assets/search.png";
import { useState } from "react";

export const Search = () => {

    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const [inputFilled, setInputFilled] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setInputFilled(event.target.value)
    }


    return (
        <div className="w-full">
            <form
                className={clsx(
                    "w-full flex gap-2 lg:w-full"
                )}
            >
                <input
                    id="inputSearch"
                    className={clsx("h-10 bg-colorSearch outline-none lg:px-3 lg:w-full rounded-2xl duration-500", searchOpen?"w-full px-3":"w-0 p-0")}
                    type="search"
                    name="search"
                    onChange={handleChange}
                />
                <button type="submit" onClick={(e)=>{
                    e.preventDefault()
                    if(inputFilled == ''){
                        if(!searchOpen){
                            setSearchOpen(true)
                        }else{
                            setSearchOpen(false)
                        }
                    }else{
                        return false                        
                    }
                }}>
                    <img className="w-6" src={search} alt="&#128269;" />
                </button>
            </form>
        </div>
    );
};
