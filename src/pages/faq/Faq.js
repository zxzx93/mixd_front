import React from "react";
import "antd/dist/antd.css";
import { Anticon } from "./FaqStyled";
import { Collapse, Tabs } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { contents } from "./FaqInfo";
import SubHeader from '../../components/header/SubHeader';

import FaqSwiper from './FaqSwiper'

const Faq = () => {
  const name = "FAQ";
  const { Panel } = Collapse;
  const { TabPane } = Tabs;

  // const [contents, setContents] = useState('')

  function callback(key) {
    console.log(key);

    // key === 1 ? setScontents(<Lists />)

  }

  const dummyCate = [
    '배송', '주문결제', '취소/교환/환불', '회원'
  ] 

  return (
    <Anticon>

      <SubHeader name={name} /> 

      {/* <FaqSwiper lists={dummyCate}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          
            <TabPane tab="배송" key="1" />
            <TabPane tab="주문결제" key="2" />
            <TabPane tab="취소/교환/환불" key="3" />
            <TabPane tab="회원" key="4" />

        </Tabs>
       </FaqSwiper> */}

      {/* <div>{contents}</div> */}



      <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane 
            tab={
              <FaqSwiper lists={dummyCate} />
            } 
            key="1"
          >
            { 
              contents.filter((value, index) => {
                return index == 0;
              }).map((value, index) => 
              <Collapse 
                bordered={false} 
                key={index.toString()} 
                expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
              >
                {value.lists.map((el, i) => 
                  <Panel header={el.question} key={i}>
                      {el.answer.map((ans, j) => 
                        <div key={j}>
                          {ans}
                        </div>
                      )}
                  </Panel>
                )}
              </Collapse>
              )
            }
          </TabPane>
          
          <TabPane 
            tab='주문결제' 
            key="2"
          >
            { 
              contents.filter((value, index) => {
                return index == 1;
              }).map((value, index) => 
              <Collapse 
                bordered={false} 
                key={index.toString()} 
                expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? -180 : 0} />}
              >
                {value.lists.map((el, i) => 
                  <Panel header={el.question} key={i}>
                      {el.answer.map((ans, j) => 
                        <div key={j}>
                          {ans}
                        </div>
                      )}
                  </Panel>
                )}
              </Collapse>
              )
            }
          </TabPane>

          <TabPane 
            tab='취소/교환/환불'
            key="3"
          >
            { 
              contents.filter((value, index) => {
                return index == 2;
              }).map((value, index) => 
              <Collapse 
                bordered={false} 
                key={index.toString()} 
                expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? -180 : 0} />}
              >
                {value.lists.map((el, i) => 
                  <Panel header={el.question} key={i}>
                      {el.answer.map((ans, j) => 
                        <div key={j}>
                          {ans}
                        </div>
                      )}
                  </Panel>
                )}
              </Collapse>
              )
            }
          </TabPane>
          
          <TabPane 
            tab='회원' 
            key="4"
          >
            { 
              contents.filter((value, index) => {
                return index == 3;
              }).map((value, index) => 
              <Collapse 
                bordered={false} 
                key={index.toString()} 
                expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? -180 : 0} />}
              >
                {value.lists.map((el, i) => 
                  <Panel header={el.question} key={i}>
                      {el.answer.map((ans, j) => 
                        <div key={j}>
                          {ans}
                        </div>
                      )}
                  </Panel>
                )}
              </Collapse>
              )
            }
          </TabPane>
      </Tabs>
        
    </Anticon>
  );

};

export default Faq;




// return (
//   <Anticon>
//     <SubHeader name={name} />
      
//       {
//       contents.map((value, index) => 
//         <Collapse bordered={false} key={index.toString()}>
//               <div className="title">
//                 {value.title}
//               </div>
//               {value.lists.map((el, i) => 
//                 <Panel header={el.question} key={i}>
//                     {el.answer.map((ans, j) => 
//                       <div key={j}>
//                         {ans}
//                       </div>
//                     )}
//                 </Panel>
//               )}
//         </Collapse>
//       )
//       }
//   </Anticon>
// );
