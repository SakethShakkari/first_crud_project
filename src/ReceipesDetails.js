function ReceipesDetails({data, handleDelete}){
   
    const output = data.map((receipe, index)=>{
       return <tr key={index}>
        <td>{receipe.name}</td>
        <td>{receipe.cuisine}</td>
        <td><img src={receipe.URL} alt="Receipe"/> </td>
        <td>{receipe.ingredients}</td>
        <td>{receipe.Preparation}</td>
        <td><button onClick={()=>handleDelete(index)} name="Delete"> Delete </button> </td>
        </tr>
    })
    return output;

}
export default ReceipesDetails;