import styles from "./ItemCss.module.css";

function ItemCss()
{
let foodMenu=["dal","chawal","rajma"];
return <>
{
  foodMenu.map(item=>( 
 <li key={item} className={`${styles['kg-item']}list-group-item kg-Item`}> 
  <span className={styles["kg-span"]}>{item}</span>
</li>
))}
</>
}

export default ItemCss;