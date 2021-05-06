import React from 'react';
import AddSizeDrawerStyled from './AddSizeDrawerStyled';
import { Radio } from 'antd';

const AddSizeDrawer = ({ visible, close, changeValue, value, lists }) => {

    const onChange = (e) => {
        changeValue(e.target.value)
        close()
    }
    
    return (
        <AddSizeDrawerStyled
            placement="bottom"
            visible={visible}
            closable={false}
        >
            <Radio.Group 
                onChange={onChange} 
                value={value}
            >
                {
                    lists.map((value, index) =>
                        <Radio key={index} value={index}>
                            {value.name}
                        </Radio>
                    )
                }
            </Radio.Group>
        </AddSizeDrawerStyled>
    )
}

export default AddSizeDrawer;
