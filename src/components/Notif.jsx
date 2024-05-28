function Notif(props) {

  return (
    <div className={props.hoverClass}>
      <img
        className="perfil"
        alt=''
        src={`./src/img/avatar-${props.user}.webp`} />

      <div className="sms_info">
        <div className="box-info">
          <p className="info"><strong>{props.userName}</strong>{props.action}<span className={props.stress}>{props.coment}</span></p>
          <div className={props.dot}></div>
        </div>

        <small>{props.date}</small>

        <div className={props.sms}>
          <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
        </div>
      </div>
      <img
        className={props.image}
        src="./src/img/image-chess.webp"
        alt="" />
    </div>
  )
}

export default Notif