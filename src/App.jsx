import './App.css'
import Notif from './components/Notif'


function App() {

  const visto = true;
  const notVisto = false;
  const hoverClass = visto ? 'sms notificationHover' : 'sms'
  const notHoverClass = notVisto ? 'sms notificationHover' : 'sms'
  const dot = visto ? 'dot' : ''

  const sms = visto ? 'coment' : 'notComent'
  const notSms = notVisto ? 'coment' : 'notComent'
  const img = visto ? 'image' : 'notImage'
  const notImg = notVisto ? 'image' : 'notImage'

  const chess = visto ? 'hover' : 'notHover'
  const notChess = notVisto ? 'hover' : 'notHover'

  const notifs = [
    {
      sms: notSms,
      image: notImg,
      hoverClass,
      stress: notChess,
      dot,
      userName: 'Mark Webber',
      user: 'mark-webber',
      action: 'reacted to your recent post',
      coment: 'My first tournament today!',
      date: '1m ago'
    },
    {
      sms: notSms,
      image: notImg,
      hoverClass,
      dot,
      stress: notChess,
      userName: 'Angela Gray',
      user: 'angela-gray',
      action: 'followed you',
      date: '5m ago'
    },
    {
      sms: notSms,
      image: notImg,
      hoverClass,
      dot,
      stress: chess,
      userName: 'Jacob Thompson',
      user: 'jacob-thompson',
      action: 'has joined your group',
      coment: 'Chess Club',
      date: '1 day ago'
    },
    {
      sms,
      stress: notChess,
      image: notImg,
      hoverClass: notHoverClass,
      userName: 'Rizky Hasanuddin',
      user: 'rizky-hasanuddin',
      action: 'sent you a private message',
      date: '5 days ago',
    },
    {
      image: img,
      stress: notChess,
      sms: notSms,
      hoverClass: notHoverClass,
      userName: 'Kimberly Smith',
      user: 'kimberly-smith',
      action: 'commented on your picture',
      date: '1 week ago',
    },
    {
      sms: notSms,
      stress: notChess,
      image: notImg,
      hoverClass: notHoverClass,
      userName: 'Nathan Peterson',
      user: 'nathan-peterson',
      action: 'reacted to your recent post',
      coment: '5 end-game strategies to increase your win rate',
      date: '2 weeks ago'
    },
    {
      sms: notSms,
      stress: chess,
      image: notImg,
      hoverClass: notHoverClass,
      userName: 'Anna Kim',
      user: 'anna-kim',
      action: 'left the group',
      coment: 'Chess Club',
      date: '2 weeks ago'
    }
  ]

  return (
    <>
      <div className='container'>

        <div className="bar">
          <div className="title">
            <h2 className="notif">Notifications</h2>
            <div className="notif-icon">3</div>
          </div>
          <div className="notif-button">
            <a href="#" className="button">Mark all as read</a>
          </div>
        </div>

        {
          notifs.map(({ image, sms, notHoverClass, hoverClass, userName, user, action, dot, coment, date, stress }) => (
            <Notif
              notHoverClass={notHoverClass}
              hoverClass={hoverClass}
              dot={dot}
              userName={userName}
              user={user}
              action={action}
              date={date}
              coment={coment}
              sms={sms}
              image={image}
              stress={stress}
            />
          ))
        }




      </div>

    </>
  )
}

export default App
