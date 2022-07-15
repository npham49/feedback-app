import Header from './components/Header'

function App() {
    return (
        <>
            <Header text="Hello World"/>   {/*you can pass props into a component*/}
            <div className='container'>
                <h1>My App</h1>
                
            </div>
        </>
    ) //JSX Component must be in 1 main parent component
} //we can create a component like this and use it for exporting

export default App