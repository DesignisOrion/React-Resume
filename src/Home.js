import { useState } from 'react';
// import { useEffect } from 'react';

const Home = () => {
    // eslint-disable-next-line
    const[blogs, setBlogs] = useState([
        { title: "Language", body: 'HTML, CSS, JS, PYTHON, SQL, TYPESCRIPT', author: 'DesignIsOrion', id: 1 },
        { title: "Framework", body: 'Bootstrap4, Flask / Django, AWS (S3, boto3), Pandas, OpenCV, ReactJS ', author: 'DesignIsOrion', id: 2 },
        { title: "Extras", body: 'Linux OS, Raspberry Pi, IOT, Adafruit ', author: 'DesignIsOrion', id: 3 }
    ]);
    return (  
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <h5>{ blog.body }</h5>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
           
        </div>
    );
}
 
export default Home;