import React from "react"

function Header(){
    const date = new Date()
    return (
        <header className="navbar">It is about {date.getHours() % 12} o'clock</header>
    )
}

export default Header