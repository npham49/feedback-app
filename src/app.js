function App() {
    const title = 'Blog post'
    const body = 'This is my blog post'//we can use curly brackets to show variables in the returned HTML
    const comments = [
        {id:1,text:'Comment one'},
        {id:2,text:'Comment two'},
        {id:3,text:'Comment three'}
    ]

    const loading = false
    const showComments = true
    const commentBlock = (  <div className="comments">
                                <h3>Comments ({comments.length})</h3>
                                <ul>
                                    {comments.map((comment, index)=>(   //the map function will show all elements based on what is returned
                                        <li key={index}>{comment.text}</li> // when you create a list using map, always use a special key
                                    ))}
                                </ul>
                            </div>) //we can also put an entire HTML block into an element and out put it

    if(loading) return <h1>Loading...</h1> //you should do this when you are fetching data from backend


    return (
        <div className='container'>
            <h1> {title.toUpperCase()}</h1>
            <p>{body}</p>

            {showComments && (commentBlock)} {/*This is a tunary, basically we can have an if statement within HTML if we do {condition ? then : else} we can also use && instead of ? if there are no ifs */}

            
        </div>
    ) //JSX Component must be in 1 main parent component
} //we can create a component like this and use it for exporting

export default App