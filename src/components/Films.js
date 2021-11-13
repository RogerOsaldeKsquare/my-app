import React from 'react';
import {Card, Grid } from 'semantic-ui-react';


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
                                            src={`./assets/images/poster${i}.png`}
                                            alt={films.title}
                                        />
                                    </div>
                                    <strong>Director</strong>
                                    <p>{films.director}</p>
                                    <strong>Release Date</strong>
                                    <p>{films.release_date}</p>
                                    <strong>Film Crawl</strong>
                                    <p>{films.opening_crawl}</p>
                                    <button className="primary-btn">Opening Crawl</button>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )

}