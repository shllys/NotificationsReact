function Notif(props) {

  return (
    <div className={props.hoverClass}>
      <img
        alt=''
        src={`./src/img/avatar-${props.user}.webp`} />
      <div className="sms_info">
        <p className="info"><strong>{props.userName}</strong><p className="p">{props.action}</p><span>{props.coment}</span>
        <div className={props.dot}></div></p>

        <small>{props.date}</small>
      </div>
    </div>
  )
}

export default Notif