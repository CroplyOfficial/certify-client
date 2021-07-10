// Contains the code of all icon components.
// The props have the same meaning as they would have in an svg tag.
// The width prop alone is sufficent for scaling in most cases (either the height or width prop would have been needed and I chose width)

const BellHollow = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-bell" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/></svg>
   )
}


const BellFilled = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-bell-fill" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/></svg>
   )
}


const CircleHollow = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
   )
}


const CircleFilled = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-circle-fill" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg>
   )
}


const Cross = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
   )
}


const Check = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>
   )
}


const Plus = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
   )
}


const Minus = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>
   )
}


const Logout = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-box-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/><path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/></svg>
   )
}


const SettingsHollow = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></svg>
   )
}


const SettingsFilled = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>
   )
}


const Filters = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-sliders" viewBox="0 0 16 16"><path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/></svg>
   )
}


const UserHollow = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
   )
}


const UserFilled = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
   )
}


const UsersHollow = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-people" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
   )
}


const UsersFilled = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/><path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>
   )
}


const Profile = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
   )
}


const IdHollow = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-person-badge" viewBox="0 0 16 16"><path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/></svg>
   )
}


const IdFilled = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-person-badge-fill" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/></svg>
   )
}


const HistoryHollow = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-hourglass" viewBox="0 0 16 16"><path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z"/></svg>
   )
}


const HistoryFilled = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-hourglass-bottom" viewBox="0 0 16 16"><path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/></svg>
   )
}


const ApplicationsHollow = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-file-earmark-text" viewBox="0 0 16 16"><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/></svg>
   )
}


const ApplicationsFilled = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-file-earmark-text-fill" viewBox="0 0 16 16"><path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/></svg>
   )
}


const CredentialsHollow = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-folder" viewBox="0 0 16 16"><path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/></svg>
   )
}


const CredentialsFilled = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-folder-fill" viewBox="0 0 16 16"><path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/></svg>
   )
}


const DashboardHollow = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-pie-chart" viewBox="0 0 16 16"><path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/></svg>
   )
}


const DashboardFilled = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-pie-chart-fill" viewBox="0 0 16 16"><path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/></svg>
   )
}


const ChevronRight = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-chevron-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
   )
}


const ChevronLeft = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-chevron-left" viewBox="0 0 16 16"><path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
   )
}


const ChevronUp = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-chevron-up" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg>
   )
}


const ChevronDown = ({fill="currentColor", width="1.5rem", id="", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  fill={fill} className="bi bi-chevron-down" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
   )
}


const ArrowUp = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V6M5 12l7-7 7 7"/></svg>
   )
}


const ArrowDown = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v13M5 12l7 7 7-7"/></svg>
   )
}


const ArrowLeft = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
   )
}


const ArrowRight = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
   )
}


const Alert = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
   )
}


const NoEntry = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
   )
}


const MenuHorizontal = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
   )
}


const MenuVertical = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
   )
}

const MenuDots = ({width="1.5rem", id="", fill="currentColor", onClick=() => {}}) => {
   return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" onClick={onClick} id={id} width={width ? width : "45.583px"} viewBox="0 0 45.583 45.583" fill={fill} style={{enableBackground: "new 0 0 45.583 45.583"}} xmlSpace="preserve"><g>	<g>		<path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097			C28.866,9.466,26.145,12.196,22.793,12.196z"/>		<path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099			C28.866,26.162,26.144,28.889,22.794,28.889z"/>		<path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098			S26.144,45.583,22.794,45.583z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
   )
}


const Edit = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
   )
}


const View = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
   )
}


const Bin = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
   )
}


const DarkMoon = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
   )
}


const LightSun = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
   )
}


const LockClosed = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
   )
}


const LockOpen = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
   )
}


const DiscSave = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
   )
}

const DoubleChevronBoxed = ({width="1.5rem", id="", onClick=() => {}}) => {
   return (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} id={id} width={width}  viewBox="0 0 24 24"><path d="M12.7071 9.1716L11.2929 7.75739L7.05024 12L11.2929 16.2426L12.7071 14.8284L9.87869 12L12.7071 9.1716Z" fill="#BECFDB"/><path d="M15.5355 7.75739L16.9497 9.1716L14.1213 12L16.9497 14.8284L15.5355 16.2426L11.2929 12L15.5355 7.75739Z" fill="#BECFDB"/><path fillRule="evenodd" clipRule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" fill="#BECFDB"/></svg>
   )
}

const PinDeleteDigit = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
      <svg width={width}  onClick={onClick} id={id} stroke={stroke} viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.68971 2.88921C6.25227 2.0962 7.16426 1.625 8.13655 1.625H18.125C19.7819 1.625 21.125 2.96815 21.125 4.625V14.375C21.125 16.0319 19.7819 17.375 18.125 17.375H8.13655C7.16426 17.375 6.25227 16.9038 5.68971 16.1108L1.41046 10.0786C1.16461 9.73204 1.16461 9.26796 1.41046 8.9214L5.68971 2.88921Z"  strokeOpacity="0.2" strokeWidth="2"/><path d="M9.75 6.875L15 12.125"  strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.75 12.125L15 6.875" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
   )
}

const Hide = ({width="1.5rem", id="", stroke="black", onClick=() => {}}) => {
   return (
      <svg width={width}  onClick={onClick} id={id} stroke={stroke ? stroke : "black"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67969 3L21.6797 19" stroke={stroke} strokeWidth="2" strokeLinecap="round"/><path fillRule="evenodd" clipRule="evenodd" d="M14.5273 4.95347C14.6173 4.69242 14.902 4.55377 15.163 4.6438C18.1487 5.67346 20.6974 7.98476 22.4582 11.0515C22.8657 11.7614 22.9629 12.5951 22.7497 13.3639C22.676 13.63 22.4004 13.786 22.1343 13.7122C21.8682 13.6384 21.7123 13.3629 21.7861 13.0968C21.9287 12.5822 21.8636 12.0244 21.591 11.5494C19.9254 8.6485 17.5505 6.52495 14.837 5.58916C14.5759 5.49914 14.4373 5.21453 14.5273 4.95347ZM8.28706 5.12941C8.39098 5.38525 8.26782 5.6769 8.01198 5.78082C5.51166 6.79643 3.32858 8.83236 1.76858 11.5495C1.41047 12.1732 1.41047 12.9398 1.76859 13.5636C4.05482 17.5456 7.66858 20.0565 11.6798 20.0565C14.5227 20.0565 17.159 18.7985 19.2712 16.6496C19.4648 16.4526 19.7813 16.4499 19.9783 16.6435C20.1752 16.8371 20.1779 17.1536 19.9844 17.3506C17.7167 19.6577 14.834 21.0565 11.6798 21.0565C7.21896 21.0565 3.31512 18.2656 0.90136 14.0615C0.366217 13.1294 0.366213 11.9837 0.901351 11.0516C2.551 8.17831 4.89163 5.96893 7.63565 4.85433C7.89149 4.75041 8.18314 4.87357 8.28706 5.12941Z" fill={stroke} /><circle cx="12" cy="12" r="3" strokeWidth="2"></circle></svg>
   )
}

const TickBadge = ({width="1.5rem", id=""}) => {
   return (
      <svg width={width} id={id} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3817 4.00426C18.5152 1.41175 22.4848 1.41175 24.6183 4.00426C25.747 5.37574 27.4843 6.09536 29.2522 5.92367C32.594 5.59912 35.4009 8.40602 35.0763 11.7478C34.9046 13.5157 35.6243 15.253 36.9957 16.3817C39.5882 18.5152 39.5882 22.4848 36.9957 24.6183C35.6243 25.747 34.9046 27.4843 35.0763 29.2522C35.4009 32.594 32.594 35.4009 29.2522 35.0763C27.4843 34.9046 25.747 35.6243 24.6183 36.9957C22.4848 39.5882 18.5152 39.5882 16.3817 36.9957C15.253 35.6243 13.5157 34.9046 11.7478 35.0763C8.40602 35.4009 5.59912 32.594 5.92367 29.2522C6.09536 27.4843 5.37574 25.747 4.00427 24.6183C1.41175 22.4848 1.41175 18.5152 4.00427 16.3817C5.37574 15.253 6.09536 13.5157 5.92367 11.7478C5.59912 8.40602 8.40602 5.59912 11.7478 5.92367C13.5157 6.09536 15.253 5.37574 16.3817 4.00426Z" fill="black" fillOpacity="0.25" stroke="#91C69D" strokeWidth="4"/><path d="M15.125 20.4099L18.9257 24.2106L26.5271 16.6092" stroke="#91C69D" strokeWidth="4" strokeLinecap="round"/></svg>
   )
}
const CrossBadge = ({width="1.5rem", id=""}) => {
   return (
      <svg width={width} id={id} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3817 4.00426C18.5152 1.41175 22.4848 1.41175 24.6183 4.00426C25.747 5.37574 27.4843 6.09536 29.2522 5.92367C32.594 5.59912 35.4009 8.40602 35.0763 11.7478C34.9046 13.5157 35.6243 15.253 36.9957 16.3817C39.5882 18.5152 39.5882 22.4848 36.9957 24.6183C35.6243 25.747 34.9046 27.4843 35.0763 29.2522C35.4009 32.594 32.594 35.4009 29.2522 35.0763C27.4843 34.9046 25.747 35.6243 24.6183 36.9957C22.4848 39.5882 18.5152 39.5882 16.3817 36.9957C15.253 35.6243 13.5157 34.9046 11.7478 35.0763C8.40602 35.4009 5.59912 32.594 5.92367 29.2522C6.09536 27.4843 5.37574 25.747 4.00427 24.6183C1.41175 22.4848 1.41175 18.5152 4.00427 16.3817C5.37574 15.253 6.09536 13.5157 5.92367 11.7478C5.59912 8.40602 8.40602 5.59912 11.7478 5.92367C13.5157 6.09536 15.253 5.37574 16.3817 4.00426Z" fill="black" fillOpacity="0.25" stroke="#DC8080" strokeWidth={4} />
        <path d="M15.4502 15.7129L24.9961 25.2588" stroke="#DC8080" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.4502 25.2588L24.9961 15.7128" stroke="#DC8080" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
   )
}

const HamburgerMenuLines = ({width="1.5rem", id="", onClick=() => {}}) => {
   return (
      <svg width={width} id={id} onClick={onClick} viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M2.25 0C1.00736 0 0 1.20883 0 2.7C0 4.19117 1.00736 5.4 2.25 5.4H33.75C34.9926 5.4 36 4.19117 36 2.7C36 1.20883 34.9926 0 33.75 0H2.25Z" fill="#8295A2" /><path d="M0 13.5C0 12.0088 1.00736 10.8 2.25 10.8H33.75C34.9926 10.8 36 12.0088 36 13.5C36 14.9912 34.9926 16.2 33.75 16.2H2.25C1.00736 16.2 0 14.9912 0 13.5Z" fill="#8295A2" /><path d="M2.25 21.6C1.00736 21.6 0 22.8088 0 24.3C0 25.7912 1.00736 27 2.25 27H33.75C34.9926 27 36 25.7912 36 24.3C36 22.8088 34.9926 21.6 33.75 21.6H2.25Z" fill="#8295A2" />
      </svg>
   );
}

const IotaLogo = ({width="1.5rem", id=""}) => {
   return (
      <svg width={width} id={id} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" fill="#5D7586">
         <defs></defs><title>IOTA Mark</title><path className="cls-1" d="M318.21,140.71a17.24,17.24,0,1,0-17.29-17.24A17.27,17.27,0,0,0,318.21,140.71Z"/><path className="cls-1" d="M337.65,384.22A17.24,17.24,0,1,0,320.37,367,17.27,17.27,0,0,0,337.65,384.22Z"/><path className="cls-1" d="M323.15,183.81a14.47,14.47,0,1,0-14.51-14.47A14.48,14.48,0,0,0,323.15,183.81Z"/><path className="cls-1" d="M361.73,189.35a14.47,14.47,0,1,0-14.5-14.47A14.49,14.49,0,0,0,361.73,189.35Z"/><path className="cls-1" d="M318.21,220.45a12.32,12.32,0,1,0-12.34-12.32A12.34,12.34,0,0,0,318.21,220.45Z"/><path className="cls-1" d="M356.79,225.68a12.32,12.32,0,1,0-12.35-12.31A12.33,12.33,0,0,0,356.79,225.68Z"/><path className="cls-1" d="M387.65,237.69a12.32,12.32,0,1,0-12.34-12.32A12.34,12.34,0,0,0,387.65,237.69Z"/><path className="cls-1" d="M345.37,255.23a10.78,10.78,0,1,0-10.8-10.77A10.79,10.79,0,0,0,345.37,255.23Z"/><path className="cls-1" d="M306.79,250A10.78,10.78,0,1,0,296,239.22,10.8,10.8,0,0,0,306.79,250Z"/><path className="cls-1" d="M376.54,267.24a10.78,10.78,0,1,0-10.8-10.77A10.79,10.79,0,0,0,376.54,267.24Z"/><path className="cls-1" d="M329.94,277.71a9.24,9.24,0,1,0-9.26-9.24A9.25,9.25,0,0,0,329.94,277.71Z"/><path className="cls-1" d="M361.11,289.41a9.24,9.24,0,1,0-9.26-9.24A9.26,9.26,0,0,0,361.11,289.41Z"/><path className="cls-1" d="M291.66,272.16a9.24,9.24,0,1,0-9.25-9.24A9.25,9.25,0,0,0,291.66,272.16Z"/><path className="cls-1" d="M313,292.79a7.7,7.7,0,1,0-7.72-7.69A7.7,7.7,0,0,0,313,292.79Z"/><path className="cls-1" d="M326.23,314a6.77,6.77,0,1,0-6.79-6.77A6.77,6.77,0,0,0,326.23,314Z"/><path className="cls-1" d="M309.87,318.34a5.54,5.54,0,1,0-5.55-5.54A5.55,5.55,0,0,0,309.87,318.34Z"/><path className="cls-1" d="M295.37,302.33a6.77,6.77,0,1,0-6.79-6.77A6.78,6.78,0,0,0,295.37,302.33Z"/><path className="cls-1" d="M274.39,287.56a7.7,7.7,0,1,0-7.72-7.7A7.71,7.71,0,0,0,274.39,287.56Z"/><path className="cls-1" d="M274.08,229.68a7.7,7.7,0,1,0-7.72-7.7A7.71,7.71,0,0,0,274.08,229.68Z"/><path className="cls-1" d="M277.47,202.59a6.78,6.78,0,1,0-6.79-6.77A6.78,6.78,0,0,0,277.47,202.59Z"/><path className="cls-1" d="M284.88,180.42a5.54,5.54,0,1,0-5.56-5.54A5.55,5.55,0,0,0,284.88,180.42Z"/><path className="cls-1" d="M271.91,170a6.78,6.78,0,1,0-6.79-6.77A6.77,6.77,0,0,0,271.91,170Z"/><path className="cls-1" d="M343.83,304.48a7.7,7.7,0,1,0-7.72-7.69A7.7,7.7,0,0,0,343.83,304.48Z"/><path className="cls-1" d="M254.33,161a7.7,7.7,0,1,0-7.73-7.7A7.71,7.71,0,0,0,254.33,161Z"/><path className="cls-1" d="M259.57,193.66a7.7,7.7,0,1,0-7.72-7.69A7.71,7.71,0,0,0,259.57,193.66Z"/><path className="cls-1" d="M250.93,224.76a9.24,9.24,0,1,0-9.26-9.24A9.25,9.25,0,0,0,250.93,224.76Z"/><path className="cls-1" d="M222.84,224.75A10.78,10.78,0,1,0,212,214,10.78,10.78,0,0,0,222.84,224.75Z"/><path className="cls-1" d="M190.13,232.15a12.32,12.32,0,1,0-12.35-12.32A12.33,12.33,0,0,0,190.13,232.15Z"/><path className="cls-1" d="M154.32,249.69a14.47,14.47,0,1,0-14.5-14.47A14.49,14.49,0,0,0,154.32,249.69Z"/><path className="cls-1" d="M117.28,279.24A17.24,17.24,0,1,0,100,262,17.26,17.26,0,0,0,117.28,279.24Z"/><path className="cls-1" d="M139.82,213.67a14.47,14.47,0,1,0-14.51-14.47A14.49,14.49,0,0,0,139.82,213.67Z"/><path className="cls-1" d="M175.61,196.13a12.32,12.32,0,1,0-12.34-12.32A12.34,12.34,0,0,0,175.61,196.13Z"/><path className="cls-1" d="M170.37,163.49A12.32,12.32,0,1,0,158,151.18,12.32,12.32,0,0,0,170.37,163.49Z"/><path className="cls-1" d="M203.09,156.1a10.78,10.78,0,1,0-10.81-10.77A10.79,10.79,0,0,0,203.09,156.1Z"/><path className="cls-1" d="M231.17,156.11a9.24,9.24,0,1,0-9.26-9.24A9.26,9.26,0,0,0,231.17,156.11Z"/><path className="cls-1" d="M236.42,188.73a9.24,9.24,0,1,0-9.26-9.23A9.25,9.25,0,0,0,236.42,188.73Z"/><path className="cls-1" d="M208.34,189.05a10.78,10.78,0,1,0-10.81-10.78A10.79,10.79,0,0,0,208.34,189.05Z"/><path className="cls-1" d="M177.78,270.93a5.54,5.54,0,1,0-5.56-5.54A5.56,5.56,0,0,0,177.78,270.93Z"/><path className="cls-1" d="M200,268.16a6.77,6.77,0,1,0-6.8-6.77A6.78,6.78,0,0,0,200,268.16Z"/><path className="cls-1" d="M224.38,258.93a7.7,7.7,0,1,0-7.71-7.7A7.71,7.71,0,0,0,224.38,258.93Z"/><path className="cls-1" d="M230.24,283.56a9.24,9.24,0,1,0-9.25-9.24A9.26,9.26,0,0,0,230.24,283.56Z"/><path className="cls-1" d="M200.62,289.4a7.7,7.7,0,1,0-7.71-7.7A7.71,7.71,0,0,0,200.62,289.4Z"/><path className="cls-1" d="M174.38,289.09a6.77,6.77,0,1,0-6.79-6.77A6.78,6.78,0,0,0,174.38,289.09Z"/><path className="cls-1" d="M174.69,310.34a7.7,7.7,0,1,0-7.72-7.7A7.71,7.71,0,0,0,174.69,310.34Z"/><path className="cls-1" d="M206.17,314.34a9.24,9.24,0,1,0-9.26-9.24A9.25,9.25,0,0,0,206.17,314.34Z"/><path className="cls-1" d="M242.9,310.34a10.78,10.78,0,1,0-10.79-10.78A10.8,10.8,0,0,0,242.9,310.34Z"/><path className="cls-1" d="M264.51,337.12a12.32,12.32,0,1,0-12.35-12.31A12.33,12.33,0,0,0,264.51,337.12Z"/><path className="cls-1" d="M219.13,340.82A10.78,10.78,0,1,0,208.34,330,10.8,10.8,0,0,0,219.13,340.82Z"/><path className="cls-1" d="M193.52,361.75A10.78,10.78,0,1,0,182.71,351,10.79,10.79,0,0,0,193.52,361.75Z"/><path className="cls-1" d="M214.81,388.84a12.32,12.32,0,1,0-12.34-12.31A12.33,12.33,0,0,0,214.81,388.84Z"/><path className="cls-1" d="M271.61,393.77A14.47,14.47,0,1,0,257.1,379.3,14.48,14.48,0,0,0,271.61,393.77Z"/><path className="cls-1" d="M240.44,367.9a12.32,12.32,0,1,0-12.35-12.31A12.33,12.33,0,0,0,240.44,367.9Z"/><path className="cls-1" d="M295.37,363a14.47,14.47,0,1,0-14.5-14.47A14.48,14.48,0,0,0,295.37,363Z"/><path className="cls-1" d="M180.56,335.28a9.24,9.24,0,1,0-9.27-9.24A9.25,9.25,0,0,0,180.56,335.28Z"/>
      </svg>
   );
}

const Register = ({width="1.5rem", id="", fill=""}) => {
   return (
      <svg width={width} id={id} fill={fill} enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.894 24c-.131 0-.259-.052-.354-.146-.118-.118-.17-.288-.137-.451l.707-3.535c.02-.098.066-.187.137-.256l7.778-7.778c.584-.584 1.537-.584 2.121 0l1.414 1.414c.585.585.585 1.536 0 2.121l-7.778 7.778c-.069.07-.158.117-.256.137l-3.535.707c-.032.006-.065.009-.097.009zm1.168-3.789-.53 2.651 2.651-.53 7.671-7.671c.195-.195.195-.512 0-.707l-1.414-1.414c-.195-.195-.512-.195-.707 0zm2.367 2.582h.01z"/><path d="m9.5 21h-7c-1.379 0-2.5-1.121-2.5-2.5v-13c0-1.379 1.121-2.5 2.5-2.5h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.827 0-1.5.673-1.5 1.5v13c0 .827.673 1.5 1.5 1.5h7c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m16.5 12c-.276 0-.5-.224-.5-.5v-6c0-.827-.673-1.5-1.5-1.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c1.379 0 2.5 1.121 2.5 2.5v6c0 .276-.224.5-.5.5z"/><path d="m11.5 6h-6c-.827 0-1.5-.673-1.5-1.5v-2c0-.276.224-.5.5-.5h1.55c.232-1.14 1.243-2 2.45-2s2.218.86 2.45 2h1.55c.276 0 .5.224.5.5v2c0 .827-.673 1.5-1.5 1.5zm-6.5-3v1.5c0 .275.225.5.5.5h6c.275 0 .5-.225.5-.5v-1.5h-1.5c-.276 0-.5-.224-.5-.5 0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 .276-.224.5-.5.5z"/><path d="m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m13.5 12h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m13.5 15h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"/></svg>
   )
}

const Contact = ({width="1.5rem", id="", fill=""}) => {
   return (
      <svg width={width} id={id} fill={fill} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve"><g><g><path d="M467,80.609H45c-24.813,0-45,20.187-45,45v260.782c0,24.813,20.187,45,45,45h422c24.813,0,45-20.187,45-45V125.609C512,100.796,491.813,80.609,467,80.609z M461.127,110.609l-6.006,5.001L273.854,266.551c-10.346,8.614-25.364,8.614-35.708,0L56.879,115.61l-6.006-5.001H461.127z M30,132.267L177.692,255.25L30,353.543V132.267z M467,401.391H45c-7.248,0-13.31-5.168-14.699-12.011l171.445-114.101l17.204,14.326c10.734,8.938,23.893,13.407,37.051,13.407c13.158,0,26.316-4.469,37.051-13.407l17.204-14.326l171.444,114.1C480.31,396.224,474.248,401.391,467,401.391z M482,353.543l-147.692-98.292L482,132.267V353.543z" /></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
    );
}

const Directory = ({width="1.5rem", id="", fill=""}) => {
   return (
      <svg width={width} id={id} fill={fill} enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m440.734 0h-351.681c-15.558 0-28.214 12.656-28.214 28.213v30.398h-7.787c-5.522 0-10 4.478-10 10v48.968c0 5.522 4.478 10 10 10h7.787v39.636h-7.787c-5.522 0-10 4.478-10 10v48.967c0 5.523 4.478 10 10 10h7.787v39.637h-7.787c-5.522 0-10 4.478-10 10v48.967c0 5.522 4.478 10 10 10h7.787v39.636h-7.787c-5.522 0-10 4.478-10 10v48.968c0 5.522 4.478 10 10 10h7.787v30.397c0 15.558 12.656 28.214 28.214 28.214h351.682c15.558 0 28.214-12.656 28.214-28.214v-455.574c-.001-15.557-12.657-28.213-28.215-28.213zm-377.682 107.579v-28.968h35.575v28.968zm0 108.603v-28.967h35.575v28.967zm0 108.603v-28.967h35.575v28.967zm0 108.604v-28.968h35.575v28.968zm76.767 58.611h-50.766c-4.529 0-8.214-3.685-8.214-8.214v-30.397h27.788c5.522 0 10-4.478 10-10v-48.968c0-5.522-4.478-10-10-10h-27.788v-39.636h27.788c5.522 0 10-4.478 10-10v-48.967c0-5.522-4.478-10-10-10h-27.788v-39.637h27.788c5.522 0 10-4.477 10-10v-48.967c0-5.522-4.478-10-10-10h-27.788v-39.636h27.788c5.522 0 10-4.478 10-10v-48.967c0-5.522-4.478-10-10-10h-27.788v-30.398c0-4.528 3.685-8.213 8.214-8.213h50.767v472zm309.129-8.214c0 4.529-3.685 8.214-8.214 8.214h-280.915v-472h280.915c4.529 0 8.214 3.685 8.214 8.213z" /><path d="m302.07 117.85c-62.953 0-114.17 51.217-114.17 114.17 0 40.063 20.426 76.488 54.638 97.439.014.008.027.016.041.024 17.868 10.931 38.438 16.708 59.491 16.708 21.055 0 41.635-5.781 59.518-16.719.051-.031.101-.063.152-.095 34.13-20.963 54.501-57.344 54.501-97.358-.001-62.953-51.218-114.169-114.171-114.169zm-44.309 197.287v-54.057c0-3.7 3.01-6.71 6.709-6.71h37.444c.052 0 .103.001.155.001s.103-.001.155-.001h37.447c3.694 0 6.7 3.01 6.7 6.71v54.064c-13.576 7.241-28.779 11.046-44.3 11.046-15.532 0-30.739-3.807-44.31-11.053zm14.902-110.276c0-16.271 13.191-29.51 29.405-29.51s29.405 13.238 29.405 29.51c0 16.221-13.109 29.426-29.253 29.509h-.304c-16.144-.082-29.253-13.288-29.253-29.509zm93.707 96.016v-39.797c0-14.058-10.913-25.614-24.709-26.636 6.161-8.259 9.812-18.501 9.812-29.583 0-27.3-22.163-49.51-49.405-49.51s-49.405 22.21-49.405 49.51c0 11.081 3.652 21.324 9.812 29.583-13.8 1.023-24.715 12.579-24.715 26.636v39.782c-18.957-17.62-29.86-42.262-29.86-68.842 0-51.926 42.244-94.17 94.17-94.17s94.17 42.244 94.17 94.17c0 26.588-10.907 51.235-29.87 68.857z" /><path d="m406.24 376.148h-208.34c-5.523 0-10 4.478-10 10s4.477 10 10 10h208.34c5.522 0 10-4.478 10-10s-4.477-10-10-10z" /><path d="m366.24 422.872h-128.34c-5.523 0-10 4.478-10 10s4.477 10 10 10h128.34c5.522 0 10-4.478 10-10s-4.477-10-10-10z" /></g></svg>
   );
}

const Home = ({width="1.5rem", id="", fill=""}) => {
   return (
      <svg width={width} id={id} fill={fill} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve"> <g> <g> <path d="M503.401,228.884l-43.253-39.411V58.79c0-8.315-6.741-15.057-15.057-15.057H340.976c-8.315,0-15.057,6.741-15.057,15.057 v8.374l-52.236-47.597c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.885c-8.076,7.36-10.745,18.7-6.799,28.889 c3.947,10.189,13.557,16.772,24.484,16.772h36.689v209.721c0,8.315,6.741,15.057,15.057,15.057h125.913 c8.315,0,15.057-6.741,15.057-15.057V356.931H293v127.337c0,8.315,6.741,15.057,15.057,15.057h125.908 c8.315,0,15.057-6.741,15.056-15.057V274.547h36.697c10.926,0,20.537-6.584,24.484-16.772 C514.147,247.585,511.479,236.245,503.401,228.884z M433.965,244.433c-8.315,0-15.057,6.741-15.057,15.057v209.721h-95.793 V341.874c0-8.315-6.742-15.057-15.057-15.057H203.942c-8.315,0-15.057,6.741-15.057,15.057v127.337h-95.8V259.49 c0-8.315-6.741-15.057-15.057-15.057H36.245l219.756-200.24l74.836,68.191c4.408,4.016,10.771,5.051,16.224,2.644 c5.454-2.41,8.973-7.812,8.973-13.774V73.847h74.002v122.276c0,4.237,1.784,8.276,4.916,11.13l40.803,37.18H433.965z" /> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
    );
}

const TickInCircle = ({width="6rem", id="", stroke=""}) => {
   return (
      <svg width={width} id={id} stroke={stroke} viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4893 49.5107L40.4704 64.4919L70.4328 34.5296" strokeWidth={8} strokeLinecap="round" /><circle cx="47.5" cy="47.5" r="43.5" strokeWidth={8} /></svg>
   );
}

const CrossInCircle = ({width="6rem", id="", stroke=""}) => {
   return (
      <svg width={width} id={id} stroke={stroke} viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.4131 35.752L59.9084 60.2472" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /><path d="M35.4131 60.248L59.9084 35.7528" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /><circle cx="47.5" cy="47.5" r="43.5" strokeWidth={8} /></svg>
   )
}

export {
   BellHollow,
   BellFilled,
   CircleHollow,
   CircleFilled,
   Cross,
   Check,
   Plus,
   Minus,
   Logout,
   SettingsHollow,
   SettingsFilled,
   Filters,
   UserHollow,
   UserFilled,
   UsersHollow,
   UsersFilled,
   Profile,
   IdHollow,
   IdFilled,
   HistoryHollow,
   HistoryFilled,
   ApplicationsHollow,
   ApplicationsFilled,
   CredentialsHollow,
   CredentialsFilled,
   DashboardHollow,
   DashboardFilled,
   ChevronRight,
   ChevronLeft,
   ChevronUp,
   ChevronDown,
   ArrowUp,
   ArrowDown,
   ArrowLeft,
   ArrowRight,
   Alert,
   NoEntry,
   MenuHorizontal,
   MenuVertical,
   MenuDots,
   Edit,
   View,
   Bin,
   DarkMoon,
   LightSun,
   LockClosed,
   LockOpen,
   DiscSave,
   DoubleChevronBoxed,
   PinDeleteDigit,
   Hide,
   TickBadge,
   CrossBadge,
   HamburgerMenuLines,
   IotaLogo,
   Register,
   Contact,
   Directory,
   Home,
   TickInCircle,
   CrossInCircle
}