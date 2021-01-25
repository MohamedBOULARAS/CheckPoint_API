const user = ({ name, username, email, address }) => {
    return (
        <div>
           <ul>
               <li>{ name }, { username }</li>
               <li>{ email }</li>
               <li>{ address }</li>
           </ul>
        </div>
    )
}

export default user;