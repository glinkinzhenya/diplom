import axios from './service';

const classes = {
    fetch: () => axios.get('/classes').then(data => data),
};

export { classes };