import React  from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';




const Table = () => {

    const operations = [
        {
            SNO: '',
            ClientID : '',
            BusinessName: '',
            Type: '',        
            ContactPerson: '',
            Manager: '',
            Email: '',
            Phone: '',
        
    
    
        }
        
    ]

    const items = []
  
    for (const [index, value] of operations.entries()) {
      items.push(<li key={index}>{value}</li>)
    }
return (

        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList
                items={operations}
                columns={columns}
                selectionMode={0}/>
               
                </div>
                
        </div>

);


};


const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
        fontWeight: 'bold',

    }

});

const operations = [
    {
        SNO: '',
        ClientID : '',
        BusinessName: '',
        Type: '',        
        ContactPerson: '',
        Manager: '',
        Email: '',
        Phone: '',
    


    }
    
]
    
    
    
    

const columns = [
    {key : 'column1', name: 'SNO', fieldName: 'SNO', minwidth: 500, maxWidth: 500, },
    {key : 'column2', name: 'ClientID', fieldName: 'ClientID', minwidth: 500, maxWidth: 500, },
    {key : 'column3', name: 'BusinessName', fieldName: 'BusinessName', minwidth: 500, maxWidth: 500, },
    {key : 'column4', name: 'Type', fieldName: 'Type', minwidth: 500, maxWidth: 500, },
    {key : 'column5', name: 'ContactPerson', fieldName: 'ContactPerson', minwidth: 500, maxWidth: 500, },
    {key : 'column6', name: 'Manager', fieldName: 'Manager', minwidth: 500, maxWidth: 500, },
    {key : 'column7', name: 'Email', fieldName: 'Email', minwidth: 500, maxWidth: 500, },
    {key : 'column8', name: 'Phone', fieldName: 'Phone', minwidth: 500, maxWidth: 500, },

]


export default Table;