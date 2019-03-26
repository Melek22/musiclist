import React from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core'

import { Star, StarBorder } from '@material-ui/icons'
import StarRatingComponent from 'react-star-rating-component';

export const ArtistCard = (props) => {
  const { artist, deleteArtist } = props;
  console.log(artist.cardImage)
  return (
    <Card className="artist-card">
      <div className="image-container">
        <img src={artist.cardImage} alt={artist.name} />
      </div>
      <CardContent>
        <h3>{artist.name}</h3>
        <p>{artist.listeners} listeners.</p>
        <p>
        <StarRatingComponent />
        </p>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Refresh
      </Button>
        <Button size="small" color="secondary" onClick={() => deleteArtist(artist)}>
          Delete
      </Button>
      </CardActions>
    </Card>
  )
} 