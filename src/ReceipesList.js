import ReceipsTableHeader from "./ReceipsTableHeader";
import ReceipeForm from "./RecipeForm";
import "./ReceipesList.css";
import ReceipesDetails from "./ReceipesDetails";
import { useState } from 'react';

function ReceipesList()
{
const initialFormData={name:"",
cuisine:"",
URL:"",
ingredients:"",
preparation:""
};

const [receipeData,setReceipeData] = useState({...initialFormData});
const [receipes,setReceipes] = useState([]);
function handleOnChange({target}){
    setReceipeData({...receipeData,[target.name]:target.value});
}

const handleCreateClick = (event) =>
{
  event.preventDefault();
  setReceipes((receipes)=>[receipeData,...receipes]);
  setReceipeData({...initialFormData});
};
const handleDelete = (indexToDelete ) =>
{
  receipes.map((receipe)=>console.log(indexToDelete));
  receipes.map((receipes,index)=> console.log(index));
  setReceipes(receipes.filter((receipe,index) =>  index!== indexToDelete)); 
  receipes.map((receipes,index)=> console.log(index));
};
    return (
     
        <fieldset>
        <table>
            <tbody>
            <ReceipsTableHeader />
                <ReceipesDetails data={receipes} handleDelete={handleDelete}/>
                <ReceipeForm handleOnChange={handleOnChange} initialFormData={receipeData} handleCreateClick={handleCreateClick}/>
                </tbody>
        </table>
        </fieldset>
     

    )

}
export default ReceipesList;