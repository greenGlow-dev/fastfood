import React from 'react'
import { Container, CategoryText,Category, Check, Form, Label, Select, Option} from './style';

export const FilterCard = (props) => {
  return (
    <Container order1 = {props.order} >
        {/* <CategoryText>Kategoriya</CategoryText>
        <Category>Ichimliklar</Category> */}

              <Form>

                     <Label>Kategoriya:</Label>
                     <Select>
                            <Option>Ichimliklar</Option>
                            <Option>Fastfood</Option>
                            <Option>Shirinliklar</Option>                            
                     </Select>

              </Form>



        <Check>

         <Check.InputLabel>
               
                <Check.InputRadio type="radio" id='1'  name="radio" />
                <Check.Span  >Narx bo'yicha (O'sish tartibida)</Check.Span> 

         </Check.InputLabel>

         <Check.InputLabel>
               
               <Check.InputRadio type="radio" id='1' name="radio" />
               <Check.Span  >Narx bo'yicha (Kamayish tartibida) </Check.Span> 

        </Check.InputLabel>

                 <Check.InputLabel>
               
                <Check.InputRadio className='radio' id='1' type="radio"  name="radio" />
                <Check.Span  >Nom bo'yicha (A-Z) </Check.Span> 

                </Check.InputLabel>

         <Check.InputLabel>
               
                <Check.InputRadio type="radio" id='1'  name="radio" />
                <Check.Span  >Nom bo'yicha (Z-A) </Check.Span> 

         </Check.InputLabel>

        </Check>
    </Container>
  )
}

export default FilterCard;
