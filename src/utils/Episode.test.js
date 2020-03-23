import React from 'react';
import { render } from '@testing-library/react';
import Episodes from '../components/Episodes';

test('renders without errors', ()=> {
    render(<Episodes episodes={[]}/>)
})