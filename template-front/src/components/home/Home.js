import React from "react";

import Card from "../layouts/Card"

import "./Home.css"

function Home() {
    return (
        <div>
            <h1>Employee Management</h1>
            <Card Titulo="Arquiteto"></Card>
            <Card Titulo="Gerente"></Card>
            <Card Titulo="DEVS"></Card>
            <Card Titulo="Férias"></Card>
        </div>
    )

}

export default Home;