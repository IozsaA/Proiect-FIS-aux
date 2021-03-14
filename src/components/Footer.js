import React from "react"

function Footer(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30
    }

    if(hours < 12){
        timeOfDay = "morning"
        styles.color = "#B4756F"
    } else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
        styles.color = "#2E0927"
    } else{
        timeOfDay = "night"
        styles.color = "#D99900"
    }

    return (
        <h1 style={styles}>Good {timeOfDay}</h1>
    )
}

export default Footer