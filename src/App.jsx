import './App.css'
import Location from './Location.jsx'
import Accordeon from './Accordeon.jsx'


function App() {
  const data = [
    {
      id: 1,
      name: 'Washighton',
      src: "https://picsum.photos/id/522/200/300",
      description: "A city of the USA",
      liked: true,
      bold: true,
      monuments: [
        'Obelisque',
        'Grand tour'
      ]
    },
    {
      id: 2,
      name: "Paris",
      src: "https://picsum.photos/id/122/200/300",
      description: "The city of Love",
      liked: true,
      monuments: [
        'Tour Effel',
        'Monmartre'
      ]
    },
    {
      id: 3,
      name: "Londre",
      src: "https://picsum.photos/id/199/200/300",
      description: "The city of rain",
      liked: false,
      monuments: [
        'London Eye'
      ]
    }
  ]


  return (
    <div>
      {data.map(location => (
        <Location
          key={location.id}
          name={location.name}
          src={location.src}
          description={location.description}
          liked={location.liked}
          bold={location.bold}
          monuments={location.monuments}
        />

      ))}
      <Accordeon />
    </div>
  )
}


export default App
