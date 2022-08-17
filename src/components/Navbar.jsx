export default function Navbar ({items}) {
    return (
        <nav className="navbar bg-dark px-5 py-3 border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/#">React Todo App</a>
                {(items.length > 0) && (
                    <button className="btn btn-outline-success rounded-1 text-white" type="submit">
                        Clear Items
                    </button>
                )}
            </div>
        </nav>
    )
}