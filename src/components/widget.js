import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'

const Widget = ({ className, children, title, icon, to }) =>
    <div className={`m-2 p-3 border-solid border-t-4 border-teal-700 ${className}`} >
        <div className="flex items-center">
            <Image filename={icon} className="w-10"/>
            <Link to={to} className="ml-2 text-2xl title primaryText to-secondary-text duration-200 underline">{title}</Link>
        </div>
        <p className="mx-4 mt-2 text-sm">{children}</p>
    </div>

export default Widget