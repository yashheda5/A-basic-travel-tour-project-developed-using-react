export default function Card(id, image,info, price, name) {
    const description= $`{info.substring(0,200)}`
    return (
        <div className="card">
            <img src={image} className="image" />
            <div className="TourDetails">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">{description}</div>
        </div>
    )
}