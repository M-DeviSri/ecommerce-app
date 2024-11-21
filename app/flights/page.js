export default function Flights() {
    const flights = [
        {
            id: 1,
            name: "Air India",
            deptCity: "HYD Hyderabad, India",
            depatureTime: "22:00",
            arrivalCity: "BOM Mumbai, India",
            arrivalTime: "23:15",
            duration: "1h 15m",
            price: 3499
        },
        {
            id: 2,
            name: "Vistara",
            deptCity: "HYD Hyderabad, India",
            depatureTime: "21:00",
            arrivalCity: "BOM Mumbai, India",
            arrivalTime: "22:30",
            duration: "1h 30m",
            price: 4599
        },
        {
            id: 3,
            name: "Air Inida Express",
            deptCity: "HYD Hyderabad, India",
            depatureTime: "20:00",
            arrivalCity: "BOM Mumbai, India",
            arrivalTime: "01:45",
            duration: "5h 45m",
            price: 4899
        },
        {
            id: 4,
            name: "IndiGo",
            deptCity: "HYD Hyderabad, India",
            depatureTime: "19:00",
            arrivalCity: "BOM Mumbai, India",
            arrivalTime: "04:30",
            duration: "9h 30m",
            price: 26599
        },
        {
            id: 5,
            name: "Akasa Air",
            deptCity: "HYD Hyderabad, India",
            depatureTime: "20:00",
            arrivalCity: "BOM Mumbai, India",
            arrivalTime: "06:45",
            duration: "10h 45m",
            price: 30899
        }    
    ]
    return (
        <div className="flex justify-center p-4">
            <div className="w-3/12">
                <div>Filters</div>
            </div>
            <div className="w-9/12">
                {flights.map((flight, index) => (
                    <div className="container rounded-xl bg-teal-100 p-5 mb-5 justify-between">
                    <div className="flex">
                        <div className="w-full md:w-2/12">
                            <h2 cassName="mb-2">{flight.name}</h2>
                            <p>{flight.deptCity}</p>
                            <h1 className="text-2xl mb-4"><b>{flight.depatureTime}</b></h1>
                        </div>
                        <div className="w-full md:w-2/12 place-content-center">
                            <h2 className="text-2xl mb-4"><b>{flight.duration}</b></h2>
                        </div>
                        <div className="w-full md:w-2/12">
                            <p>{flight.arrivalCity}</p>
                            <h1 className="text-2xl mb-4"><b>{flight.arrivalTime}</b></h1>
                        </div>
                        <div className="w-full md:w-4/12">
                            <h4 className="text-2xl"><b>Rs. {flight.price}/-</b></h4> <br/>
                            <p>Get Rs.225 OFF with GISUPER</p>
                        </div>
                        <div className="w-full md:w-2/12">
                            <button className="bg-fuchsia-300 hover:bg-fuchsia-500 p-2 px-3 rounded-md text-white">VIEW FARES</button> <br/> <br/>
                            <a href='#' className="underline hover:underline-offset-4 ">Flight Details</a>
                        </div>
                    </div>
                </div>
              ))}
            </div>
        </div>
    )
}