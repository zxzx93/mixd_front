import React from 'react';
import WashingGuideStyled from './WashingGuideStyled';
import SubHeader from './../../../components/header/SubHeader';

const WashingGuide = ({ visible, close }) => {
    const name = "세탁방법";

    const useToggle = () => {
        close()
    }

    const wasingLists = [
        {
            k_name: "면",
            e_name: 'COTTON',
            washing: [
                'handWash', 'washer', 'bleach', 'screw',
            ],
            content: [
                '중성세제를 푼 중성세제를 푼 찬물로 손세탁을 권장하며',
                '컬러별로 구분하여 세탁해야 색상이 선명하게 유지됩니다.',
            ]
        },
        {
            k_name: "데님",
            e_name: 'DENIM',
            washing: [
                'dry', 'handWash', 'shade', 'nautral',
            ],
            washing_name: [
                '드라이클리닝', '손세탁', '그늘에건조', '중성세제',
            ],
            content: [
                '물빠짐을 막기위해 첫 세탁은 드라이클리닝을 권장합니다.',
                '자주 세탁할 경우 원래의 색과 핏이 변형 될 수 있으므로',
                '주의해야합니다.',
            ]
        },
        {
            k_name: "린넨/마",
            e_name: 'LINEN',
            washing: [
                'handWash', 'washer', 'bleach', 'screw', 'shade',
            ],
            washing_name: [
                '손세탁', '세탁기가능', '표백금지', '비틀기금지', '그늘에건조',
            ],
            content: [
                '원형보존을 위해 드라이클리닝을 권장하며,',
                '손세탁시 중성세제를 푼 미온수로 세탁하여 그늘에 건조합니다.',
                '다림질은 낮은 온도로 천을 덧대어 사용합니다.',
            ]
        },
        {
            k_name: "폴리/아크릴/쉬폰",
            e_name: 'POLY/ACRYL/CHIFFON',
            washing: [
                'dry', 'handWash', 'dedicate', 'ironing', 'shade',
            ],
            washing_name: [
                '드라이클리닝', '손세탁', '전용세제', '천대고다림질', '그늘에건조',
            ],
            content: [
                '원형보존을 위해 드라이클리닝을 권장하며,',
                '손세탁시 중성세제를 푼 미온수로 세탁하여 그늘에 건조합니다.',
                '다림질은 낮은 온도로 천을 덧대어 사용합니다.',
            ]
        },
        {
            k_name: "레이온",
            e_name: 'RAYON',
            washing: [
                'dry', 'handWash', 'dedicate', 'screw', 'ironing',
            ],
            washing_name: [
                '드라이클리닝', '손세탁', '전용세제', '비틀기금지', '천대고다림질',
            ],
            content: [
                '원형보존을 위해 드라이클리닝을 권장하며,',
                '손세탁시 중성세제를 푼 미온수로 세탁하여 그늘에 건조합니다.',
                '다림질은 낮은 온도로 천을 덧대어 사용합니다.',
            ]
        },
        {
            k_name: "니트",
            e_name: 'RAYON',
            washing: [
                'dry', 'handWash', 'screw', 'dedicate',
            ],
            washing_name: [
                '드라이클리닝', '손세탁', '비틀기금지', '전용세제',
            ],
            content: [
                '전용세제를 푼 미온수에 잠깐 담궜다가',
                '가볍게 눌러 손세탁 합니다.',
                '옷의 형태를 위해 비틀어 짜지 말고 뉘어서 건조시키며,',
                '되도록 드라이클리닝을 권장합니다.',
            ]
        },
        {
            k_name: "울(모직)/앙고라",
            e_name: 'WOLL/ANGORA',
            washing: [
                'dry', 'handWash', 'screw', 'dedicate',
            ],
            washing_name: [
                '드라이클리닝', '손세탁', '비틀기금지', '전용세제',
            ],
            content: [
                '원형보존을 위해 드라이클리닝을 권장하며,',
                '잦은 세탁은 원단을 손상시키니 주의해주세요.',
            ]
        },
        {
            k_name: "퍼/가죽/스웨이드",
            e_name: 'FUR/LEATHER/SUEDE',
            washing: [
                'dry', 'handWash', 'dedicate', 'ironing',
            ],
            washing_name: [
                '드라이클리닝', '손세탁', '전용세제', '천대고다림질',
            ],
            content: [
                '작은오염은 중성세제를 푼 미온수를 적신 천으로',
                '톡톡 두들기듯 닦아냅니다.',
                '전문 세탁소에서 드라이클리닝을 권장하며,',
                '통풍이 잘 되는 곳에 보관해주세요.',
            ]
        },
    ]


    const management = (el) => {
        let result = {
            img: '',
            name: ''
        };

        switch (el) {
            case 'washer':
                result['img'] = '/images/washing_washer.png';
                result['name'] = '세탁기'
                break;
            case 'bleach':
                result['img'] = '/images/washing_bleach.png';
                result['name'] = '표백금지'
                break;
            case 'handWash':
                result['img'] = '/images/washing_handWash.png';
                result['name'] = '손세탁'
                break;
            case 'screw':
                result['img'] = '/images/washing_screw.png';
                result['name'] = '비틀기금지'
                break;
            case 'dry':
                result['img'] = '/images/washing_dry.png';
                result['name'] = '드라이크리닝'
                break;
            case 'shade':
                result['img'] = '/images/washing_shade.png';
                result['name'] = '그늘에건조'
                break;
            case 'nautral':
                result['img'] = '/images/washing_nautral.png';
                result['name'] = '중성세제'
                break;
            case 'dedicate':
                result['img'] = '/images/washing_dedicate.png';
                result['name'] = '전용세제'
                break;
            case 'ironing':
                result['img'] = '/images/washing_ironing.png';
                result['name'] = '천대고다림질'
                break;
            default :
                result = {img: null, name: null}
        }

        return (
            <>
                <img src={result.img} alt="" />
                <p>{result.name}</p>
            </>
        )
    }

    return (
        <WashingGuideStyled
            visible={visible}
            zIndex={1250}
            maskStyle={{background: 'rgba(0, 0, 0, 0.7)'}}
            maskClosable={false}
            onCancel={close}
            closable={false}
            footer={null}
        >
            <SubHeader name={name} unUseCart={true} useToggle={useToggle} />

            <div className="guide_title">
                <img src="/images/water.png" alt="" />
                <p>WASHING GUIDE</p>
            </div>

            {
                wasingLists.map((value, index) => 
                    <div className="wasing_lists" key={index}>
                        <div>
                            <span>{value.k_name}</span>
                            <p>{value.e_name}</p>
                        </div>
                        <ul className="management">
                            {
                                value.washing.map((ele, i) => 
                                    <li key={i}>{management(ele)}</li>
                                )
                            }
                        </ul>
                        <ul className="notice_wrap">
                            {
                                value.content.map((ele, i) => 
                                    <li key={i}><p>{ele}</p></li>
                                )
                            }
                        </ul>
                    </div>
                )

            }
        </WashingGuideStyled>
    )
}

export default WashingGuide;