import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';


const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
        fontWeight: 'bold',


    }

});

const tableStyle = {
    root: {
        marginLeft: 150, 
        marginTop: 60
    }
}



const operations = [
    {
        SNO: '',
        LetterNo : '',
        ClientName: '',
        Type: '',       
        FirstResponse: '',
        Created: '',
        Accepted: '',
        Expiry: '',
        Status: '',
    
    },

    
    
    ]

const columns = [
    {key : 'column1', name: 'SNO', fieldName: 'SNO', minwidth: 300, maxWidth: 300, },
    {key : 'column2', name: 'LetterNo', fieldName: 'LetterNo', minwidth: 300, maxWidth: 300, },
    {key : 'column3', name: 'ClientName', fieldName: 'ClientName', minwidth: 300, maxWidth: 300, },
    {key : 'column4', name: 'Type', fieldName: 'Type', minwidth: 300, maxWidth: 300, },
    {key : 'column5', name: 'FirstResponse', fieldName: 'FirstResponse', minwidth: 300, maxWidth: 300, },
    {key : 'column6', name: 'Created', fieldName: 'Created', minwidth: 300, maxWidth: 300, },
    {key : 'column7', name: 'Accepted', fieldName: 'Accepted', minwidth: 300, maxWidth: 300, },
    {key : 'column8', name: 'Expiry', fieldName: 'Expiry', minwidth: 300, maxWidth: 300, },
    {key : 'column9', name: 'Status', fieldName: 'Status', minwidth: 300, maxWidth: 300, }

]




const TableQuotes = () => {
    return (

        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList
                styles = {tableStyle}
                items={operations}
                columns={columns}
                selectionMode={0}
             />
                
                </div>
              
        </div>
        
    );
};

export default TableQuotes;