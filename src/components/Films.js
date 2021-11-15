import React from 'react';
import {Card, Grid } from 'semantic-ui-react';
import images from "../assets/images"
import ModalF from './Modal'

export default function Films({data}){
    return (
        <>
            <h1>Films</h1>
            <Grid columns={3}>
                {data.map((films, i)=>{
                    return(
                        <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                
                                <Card.Header>{films.title}</Card.Header>
                                <Card.Description>
                                    <div className="card-image-container">
                                        <img
                                            className="medium"
                                            style={{ width: 260, height: 300 }}
                                            src={images[i]}
                                            alt={films.title}
                                        />
                                    </div>
                                    <strong>Director</strong>
                                    <p>{films.director}</p>
                                    <strong>Release Date</strong>
                                    <p>{films.release_date}</p>
                                </Card.Description>
                                <ModalF films={films}/>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )

}