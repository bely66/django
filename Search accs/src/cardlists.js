import React from 'react';
import Card from './card'

const CardList = ({robots}) => {
    
   return( 
    <div>

   {robots.map((user,i) => {
        return <Card 
    key={i} 
       email={robots[i].email} 
            name={robots[i].name} 
                id={robots[i].id} 
       />
        
    })

}
    </div>
    );

    
    
    
    
}
export default CardList ;