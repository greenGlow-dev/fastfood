import React from 'react'
import { Container, CategoryText,Category, Check} from './style';

export const FilterCard = (props) => {
  return (
    <Container order1 = {props.order} >
        <CategoryText>Kategoriya</CategoryText>
        <Category>Ichimliklar</Category>
        <Check>

         <Check.InputLabel>
               
                <Check.InputRadio type="radio" checked="checked" name="radio" />
                <Check.Span  >Narx bo'yicha (O'sish tartibida)</Check.Span> 

         </Check.InputLabel>

         <Check.InputLabel>
               
               <Check.InputRadio type="radio" checked="checked" name="radio" />
               <Check.Span  >Narx bo'yicha (Kamayish tartibida) </Check.Span> 

        </Check.InputLabel>

                 <Check.InputLabel>
               
                <Check.InputRadio type="radio" checked="checked" name="radio" />
                <Check.Span  >Nom bo'yicha (A-Z) </Check.Span> 

         </Check.InputLabel>

         <Check.InputLabel>
               
                <Check.InputRadio type="radio" checked="checked" name="radio" />
                <Check.Span  >Nom bo'yicha (Z-A) </Check.Span> 

         </Check.InputLabel>

        </Check>
    </Container>
  )
}

export default FilterCard;
