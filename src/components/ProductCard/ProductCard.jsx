import style from './ProductCard.module.css'

const ProductCard = ({data}) => {
    return (
        <div className={style.ProductCard}>
            <img src={data.image} alt={data.title} />
            <div className={style.cardContent}>
                <h3>{data.title}</h3>
                <p className={style.description}>{data.description}</p>
                <p className={style.price}>${data.price}</p>
            </div>
            
            
        </div>
        
        
       
    )
}

export default ProductCard;