import Navbar from "./components/Navbar"
import Form from "./components/Form"
import List from "./components/List"

export default function App () {

    const items = [
        { id : 1, text : "Finish the Avengers series" },
        { id : 2, text : "Take my dogs to the vet" },
        { id : 3, text : "Go to the car wash" },
    ]

    return (
        <div className="wrapper bg-dark text-white">
            <Navbar items={items}/>
            <div className="container pt-5">
                <div className="col-12 col-lg-6 mx-auto mt-5 p-5 border border-light rounded">
                   <Form/>
                   <List items={items} />
                </div>
            </div>
        </div>
    ) 
}
