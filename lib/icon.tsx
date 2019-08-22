import React from 'react';
import './importIcons'
import './icon.scss'

interface IconProps {
    name: String,
    onClick: React.MouseEventHandler<SVGElement>
}

const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return (
        <span >
           <svg className="react-icon" onClick={props.onClick}>
               <use xlinkHref={`#${props.name}`}></use>
           </svg>
        </span>
    )
}

export default Icon