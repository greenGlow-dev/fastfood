import React from 'react'
import { Container, Info, Wrapper, IconWrapper, Timer, RemoweWrapper1, RemoweWrapper2 } from './style.js'
import save from '../../../assets/icons/save.svg'
import time from '../../../assets/icons/clock.svg'
import user from '../../../assets/icons/user.svg'
import remove from '../../../assets/icons/x.svg'
import check from '../../../assets/icons/check.svg'
export const ProductCard = () => {
  return (
    <Container>

              <Wrapper>
                <Timer>
                <Info.OrderId>1234</Info.OrderId>
                
                <IconWrapper>
                    <Info.Save  src={save} />
                </IconWrapper>
                </Timer>
              <Timer>
                    <Info.Time  src={time} />
                     <Info.Clock>00:24</Info.Clock>
              </Timer>
               
              </Wrapper>
              <Wrapper  column >
                <Info>
                <Info.User src={user} />
                <div>
                  <Info.Name>Razzoqov Muhriddin</Info.Name>
                  <Info.Number > (+99 893) 461-41-88</Info.Number>
                </div>
                </Info>
                <Info top>
                    <div>
                    <Info.Total>Umumiy summa</Info.Total>
                    <Info.Price>40,000 UZS</Info.Price>
                    </div> 
                    <Info >
                    <Info.PaymeIcon/>
                    <Info.Payme>Payme</Info.Payme>
                    </Info>
                </Info>
              </Wrapper>
              <Wrapper column>
                <Info.Box1>
                    <Info column>
                      <Info.Operator>Operator:</Info.Operator>
                      <Info.OperatorName>Komilova M</Info.OperatorName>
                    </Info>
                    <RemoweWrapper1> 

                      <RemoweWrapper2>
                          <Info.Remove  src={remove}/>
                      </RemoweWrapper2>
                      
                    </RemoweWrapper1>
                 
                </Info.Box1>
                <Info.Box1>
                    <Info column>
                      <Info.Operator>Filial:</Info.Operator>
                      <Info.OperatorName>Fast Food</Info.OperatorName>
                      <Info.OperatorName>Maksim Gorkiy</Info.OperatorName>
                    </Info>
                   <RemoweWrapper1> 

                      <RemoweWrapper2>
                          <Info.Remove  src={check}/>
                      </RemoweWrapper2>
                      
                    </RemoweWrapper1>
                </Info.Box1>
              </Wrapper>

    </Container>
  )
}
export default ProductCard
  