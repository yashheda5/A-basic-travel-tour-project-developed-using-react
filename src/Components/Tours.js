import Card from "./Card"
export default function Tours({tours,removeTour}){
    return(
        <div className="Container">
             <div>
             <h2 className="Title">Plan with Love</h2>
             </div>

             <div className="Cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
             </div>
        </div>
    )
}