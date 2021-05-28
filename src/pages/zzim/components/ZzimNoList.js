import React, { useState } from 'react'
import { Link } from "react-router-dom";

import ZzimNoListStyled from './ZzimNoListStyled'

function ZzimNoList({ list, keyValue }) {

    const textlist = list.map((text, i) => {

        if (list[i].key === keyValue) {
            return (
                <div key={i}>
                    <img src="/images/zzim_no_item.svg" ></img>
                    <div className="text_box" >
                        <div className="main_title" >
                            {text.main_title}
                        </div>
                        <div className="sub_title">
                            {text.sub_title}
                        </div>
                    </div>
                    <div className="go_shop">
                        <Link to={text.link} >
                            <p>
                                {text.go_shop}
                            </p>
                        </Link>
                    </div>
                </div>
            )
        }

    });

    return (

        <ZzimNoListStyled>
            <div className="zzim_box">
                <li>{textlist}</li>
            </div>
        </ZzimNoListStyled>

    )
}

export default ZzimNoList
