import React, { useState } from 'react'
import ZzimNoListStyled from './ZzimNoListStyled'

function ZzimNoList({ list , keyValue }) {
    const listbox = [];
    for (let i = 0; i < list.length; i++) {
        
        if (list[i].key == keyValue) {
            console.log("yes");
            listbox.push(list[i].key)
            console.log(listbox[0]);
        }
        else {
            //console.log("no");
        }
    }

    return (
        
        <ZzimNoListStyled>
             <div className="zzim_box">
                <img src="/images/zzim_no_item.svg"></img>
                {list.map((value, index) => {
                    <>
                        {listbox[0] === keyValue ? (
                            <ul key={index}>
                                <div className="text_box" >
                                    <li className="main_title">
                                        {value.main_title}
                                    </li>
                                    <li className="sub_title">
                                       {value.sub_title}
                                    </li>
                                </div>
                                <div className="go_shop">
                                    <p>{value.go_shop}</p>
                                </div>   
                            </ul>
                        ): (
                            ""
                        )}
                        
                    </>
                })}
            </div>
        </ZzimNoListStyled>

    )
}

export default ZzimNoList
