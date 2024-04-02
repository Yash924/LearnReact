function Maps()
{
let FoodItems=["Dal","Chawal","Chole","Rajma","lockey"];
return(
<>
<h1>Healthy Food</h1>
<ul className="List-group">
  {FoodItems.map((item)=>(
    <li key={item} className="list-group-items">{item}</li>
  ))}
</ul>
</>
);
}
export default Maps;
