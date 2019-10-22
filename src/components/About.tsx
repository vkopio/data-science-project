import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const About = () => {

    return (
        <Container text>
            <Header as='h1'>About</Header>
            <p>
            ‘Map the air’ is an inspiring application to connect air quality with social 
            impact. In this version, we use annual Particular Matter less than 2.5um (PM2.5)
            for each country in Europe as its air quality data. We include two social 
            metrics (life expectancy and GDP per capita US$) as the predictor variables in
            our regression models. The regression results are shown in the map on this application.

            In simple words, brighter colors represent a strong influence by PM2.5 on the 
            selected social metrics.
                
            We will fit real-time PM2.5 data to estimate the corresponding social metrics in
            our future release! Stay tuned!
            
            Contact:

            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
        </Container>
    )
}

export default About
