import React from 'react'
import {useNavigate} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return <>
        <h2>Information Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime recusandae at nulla veniam eaque repudiandae sint quos. 
        Fuga, recusandae dolorem.</p>
        <button className='btn' onClick={() => navigate('/')}>Back to the List</button>
    </>
}