import "./ReceipeForm.css";
function ReceipeForm({handleOnChange, initialFormData, handleCreateClick})
{
    const formPlaceHolders={name:"Name",
    cuisine:"Cuisine",
    URL:"URL",
    ingredients:"Ingredients",
    preparation:"Preparation"
    };
    return (
        <tr>
        <td><input name="name" id="name" placeholder={formPlaceHolders.name} onChange={handleOnChange} value={initialFormData.name}></input></td>
        <td><input name="cuisine" id="cuisine" placeholder={formPlaceHolders.cuisine} onChange={handleOnChange} value={initialFormData.cuisine}></input></td>
        <td><input name="URL" id="URL" placeholder={formPlaceHolders.URL} onChange={handleOnChange} value={initialFormData.URL}></input></td>
        <td><textarea name="ingredients" id="ingredients" placeholder={formPlaceHolders.ingredients} onChange={handleOnChange} value={initialFormData.ingredients}></textarea></td>
        <td><textarea name="preparation" id="preparation" placeholder={formPlaceHolders.preparation} onChange={handleOnChange} value={initialFormData.preparation}></textarea></td>
        <td><button name="create" type="submit" onClick={handleCreateClick}>Create</button></td>
        </tr>
    );
}
export default ReceipeForm;