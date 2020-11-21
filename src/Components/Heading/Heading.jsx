import React from 'react'
import styles from "./Heading.module.scss"
function Heading({heading}) {
    return (
        <div className={`text-center ${styles["heading-style"]}`}>
            <p>{heading}</p>
        </div>
    )
}

export default Heading
