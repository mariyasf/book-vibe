import { Button } from '@material-tailwind/react';
import { useState } from 'react';


const SortByButton = ({ onSort }) => {
    const [sortBy, setSortBy] = useState('id');

    const handleChange = (event) => {
        setSortBy(event.target.value);
        onSort(event.target.value);
    };

    return (
        <div>
            <span>Sort By: </span>
            <input
                type="radio"
                id="id"
                name="sort"
                value="id"
                checked={sortBy === 'id'}
                onChange={handleChange}
            />
            <label htmlFor="id">ID</label>
            <input
                type="radio"
                id="rating"
                name="sort"
                value="rating"
                checked={sortBy === 'rating'}
                onChange={handleChange}
            />
            <label htmlFor="rating">Rating</label>
            <input
                type="radio"
                id="name"
                name="sort"
                value="name"
                checked={sortBy === 'name'}
                onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
            <Button variant="contained" color="primary" onClick={() => onSort(sortBy)}>
                Sort
            </Button>
        </div>
    );
};

export default SortByButton;
