import './Film.css'
function Film({title,id,rate,date,disc,src})
{return(
<>
<div style={{backgroundImage:`url(${src})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 70%' }} className='cardd'>
<h2>{title}</h2>
<h3>Date:{date} </h3>
<p>Discription: {disc}</p>
<img src={src} alt='' />

</div>
</>
)
}
export default Film