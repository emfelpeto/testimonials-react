import Testimonial from './components/Testimonial';
import testimonials from './data/testimonials.json'

function App() {
    return ( 
        <div className="App d-flex align-items-center justify-content-center my-5 container flex-column">
          <header className="App-header">
            <h1 className="mb-5">Here is our alumni testimonials:</h1>
          </header>
          {testimonials.map((currElement, index) => (
            <Testimonial key={index} props={currElement}/>
          ))}
        </div>
    );
}

export default App;