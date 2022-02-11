const UserCard = ({ card }) => {
  return (
    <div className='card'>
      <img alt="avatar" className='image' src={card.avatar_url} />
       <div className='info'>{card.name}</div>
    </div>
  )
}

export default UserCard
