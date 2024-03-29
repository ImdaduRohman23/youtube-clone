import React from 'react';
import { categories } from '../utils/constants';
import { Stack } from '@mui/material';

const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
			direction="row"
			sx={{
				overflow: 'auto',
				height: { sx: 'auto', md:'95%'},
				flexDirection: {md: 'column'},
        borderBottom: '1px solid rgb(140, 140, 140)'
			}}
		>
			{categories.map((category) => (
				<button 
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && '#fc1503',
            color: 'white'
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
					<span
            style={{
              color: category.name === selectedCategory ? 'white' : 'red',
              marginRight: '15px'
            }}
          >{category.icon}</span>

					<span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.8'
            }}
          >{category.name}</span>
				</button>
			))}
		</Stack>
  )
}

export default SideBar
