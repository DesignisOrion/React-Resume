const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>@DesignIsOrion </h1>
            <div className ="links">
                <a href="/">Home</a>
                <a href="/create" style = {{
                    color: "white",
                    backgroundColor: '#01020a',
                    borderRadius: '8px'
                }}>Add Review</a>
            </div>
        </nav>
    );
}
 
export default Navbar;