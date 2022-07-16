import React from 'react'
import { Container, Wrapper, Timer, Info, ItemWrap,Items,IconWrapper,RemoweWrapper1,RemoweWrapper2} from './style'
import save from '../../../assets/icons/save.svg'
import time from '../../../assets/icons/clock.svg'
import user from '../../../assets/icons/user.svg'
import xisob from '../../../assets/icons/Xisob.svg'
import truck from '../../../assets/icons/truck.svg'
import remove from '../../../assets/icons/x.svg'
import check from '../../../assets/icons/check.svg'
export const AddOrder = (props) => {
  return (


    <Container order = {props.order} >
         <Wrapper>

                <Info.OrderId>1234</Info.OrderId>
         <Timer>
                 <Info.Time  src={time} />
                 <Info.Clock>00:24</Info.Clock>
        </Timer>

         </Wrapper>
         <Wrapper>
            <Info order>
                
                 <Info>
                    <Info.User src={user} />
                    <Info.Name>Razzoqov Muhriddin</Info.Name>
                 </Info>

                <Info>

                <Info.Number > (+99 893) 461-41-88</Info.Number>

                </Info>
              
             </Info>
         </Wrapper>
         <Wrapper bottomLine>
             <div>
                 <Info.Operator >Operator:</Info.Operator>
                 <Info.OperatorName>Komilova M</Info.OperatorName>
             </div>
             <div>
                 <Info.Operator >Filial:</Info.Operator>
                 <Info.OperatorName>MW Maksim Gorgiy</Info.OperatorName>
             </div>
         </Wrapper>
         <Wrapper column >
             <Info.Wrap>
             <Info.Operator >Mahsulotar</Info.Operator>
             <Info.Operator >Soni | Narxi</Info.Operator>
             </Info.Wrap>
            <ItemWrap>
                <Items>

                    <Items.Item>
                    Shaurma o'rtacha
                    </Items.Item>

                    <Items.Item>
                    4*15,000 UZS
                    </Items.Item>

                </Items>
                 <Items>

                    <Items.Item>
                    Klab sendwich
                    </Items.Item>

                    <Items.Item>
                    2*23,000 UZS
                    </Items.Item>
                    
                </Items>
                 <Items>

                    <Items.Item>
                    Coca-Cola 1,5
                    </Items.Item>

                    <Items.Item>
                    1*9,000 UZS
                    </Items.Item>
                    
                </Items>
                
            </ItemWrap>
         </Wrapper>
         <Wrapper>
         <Info order>
                
                <Info>
                 
                   <Info.User src={xisob} />
                   <Info.Name>115,000 UZS</Info.Name>

                </Info>

                <Info>
                 
                 <Info.User src={truck} />
                 <Info.Name>5,000 UZS</Info.Name>

              </Info>
             
            </Info>
         </Wrapper>
    </Container>
  )
}

export default AddOrder