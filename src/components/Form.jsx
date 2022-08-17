export default function Form () {
    return (
        <form>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control rounded-0" 
                    placeholder="Add Item Text Here"
                />
                <button 
                    className="btn bg-success text-white rounded-0 fw-bold"
                >
                    Submit
                </button>
            </div>
            <hr/>
        </form>
    )
}