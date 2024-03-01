import React from 'react';
import { useState } from 'react';

import {  AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategroy = (newCategory) => {
        if (categories.includes(newCategory)) return;
        const newCategories = [newCategory, ...categories];
        setCategories(newCategories);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategroy} />
            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category} />
            )
            )}
        </>
    )
}
