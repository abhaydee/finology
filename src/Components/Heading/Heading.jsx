import React from 'react'
import styles from "./Heading.module.scss"
function Heading({heading,className}) {
    return (
        <div className={`text-center ${styles["heading-style"]} ${className}`}>
            <p>{heading}</p>
        </div>
    )
}

export default Heading
