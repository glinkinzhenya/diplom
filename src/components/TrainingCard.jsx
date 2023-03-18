import React, { useState } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';
import CreateModal from './Dialog/CreateModal';

export default function TreiningCard({ trainingName, imageSrc, info }) {
    const [open, setOpenModal] = useState(false);

    const startQuiz = () => {
        console.log("Quiz started");
        alert("Quiz started")
    }

    return (
        <>
            <Card sx={{ width: 300 }}>
                <CardMedia
                    sx={{ height: 240 }}
                    image={imageSrc}
                    title='green iguana'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {trainingName}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {info.slice(0, 50)}...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' onClick={startQuiz}>Почати</Button>
                    <Button size='small' onClick={() => setOpenModal(true)}>Дізнатись більше</Button>
                </CardActions>
            </Card>
            <CreateModal
                open={open}
                handleOnClose={() => setOpenModal(false)}
                imageSrc={imageSrc}
                trainingName={trainingName}
                info={info}
            />
        </>
    );
}