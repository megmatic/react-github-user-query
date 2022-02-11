import { useState } from 'react' 
import SearchForm from './components/SearchForm'
import UserCardList from './components/UserCardList' 

const App = () => {
  const [cards, setCards] = useState([]) 

  const addNewCard = (cardInfo) => {
    setCards(cards.concat(cardInfo)) 
  } 

  return (
    <div>
      <SearchForm onSubmit={addNewCard} />
      <UserCardList cards={cards} />
    </div>
  ) 
} 

export default App 
