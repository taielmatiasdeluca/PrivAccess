

import { Table, Button } from "flowbite-react";



export function DefaultTable(
    {
        data, //Data to render
        buttonText="Nuevo", //Default button text
        modalFunction= ()=>{}, //Modal function for button if needed
        rowFunction=()=>{} //Row click function
    }
) {


    //Data contains an arrayy of objects y need the object with most propierties
    const columns = Object.keys(data.reduce((maxObj, currentObj) => {
        return Object.keys(maxObj).length > Object.keys(currentObj).length ? maxObj : currentObj;
    }, {}))

    //Default funcion on row click
    function rowClick(rowData){
        rowFunction(rowData);
    }


    return (
    <div className="overflow-x-auto">
        <header className="flex justify-between items-center m-4">
            <Button color="blue" onClick={modalFunction}>{buttonText}</Button>
        </header>
      <Table>
        <Table.Head>
            { columns.map(item => <Table.HeadCell>{item}</Table.HeadCell>)}
        </Table.Head>
        
        <Table.Body className="divide-y">
        {data.map(item=>{
            return (
            <Table.Row onClick={() =>{rowClick(item)}} className="bg-white hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-800">
                {Object.keys(item).map(key =>(
                    <Table.Cell>{item[key]}</Table.Cell>
                ))}
            </Table.Row>
            )
        }
        )}
        </Table.Body>
      </Table>
    </div>
  );
}


