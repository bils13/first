// import { api } from '@/axios/api';
"use client"

import axios from 'axios';
import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface GymContext {
    children: ReactNode
}

export interface GymProviderProps {
    // handleClick(): Promise<void>;
    handleClick: () => void;
}

const GymContext = createContext<GymProviderProps>({} as GymProviderProps);

const baseURL = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

export const GymProvider = ({ children }: GymContext) => {

    const [search, setSearch] = useState()
    
    useEffect(() => {
        const searchData = async () => {
            await axios.get(baseURL)
            .then((response) => {
                setSearch(response.data.locations)
            })
        }
        searchData()
    }, []) // fazendo a busca geral no banco de dados

    function handleClick(){
        console.log(search)
    }

    return(
        <GymContext.Provider value={{handleClick}}>
            {children}
        </GymContext.Provider>
    )
}

export default GymContext;