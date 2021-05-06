import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const HomePage = () => {
    return (
        <Container>
            <h1>starter</h1>
        </Container>
    )
}

export default HomePage
