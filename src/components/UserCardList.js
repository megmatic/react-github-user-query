import UserCard from "./UserCard"

const UserCardList = ({ cards }) => (
  <div>
    {cards.map((card, index) => (
      <UserCard card={card} key={index} />
    ))}
  </div>
)

export default UserCardList