import React from 'react';
import FilterStyled from './FilterStyled';
import { Select } from 'antd';

const { Option } = Select;

const Filter = ({ options }) => {
    
    const filterChange = () => {
        console.log("Filter Change");
    }

    return (
        <FilterStyled className="filter">
            <Select defaultValue="인기순" onChange={filterChange}>
                {
                    options.map((value, index) => 
                        <Option key={index} value={value}>{value}</Option>
                    )
                }
            </Select>
        </FilterStyled>
    )
}

export default Filter;
