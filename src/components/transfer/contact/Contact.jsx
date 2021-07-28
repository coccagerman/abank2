import React from 'react'
import { Link } from 'react-router-dom'

const Contact = ({contact, index}) => {
    return (
        <Link to={`/transfer/${index}`}>
            <article className='contact'>
                <img src={contact.picture.medium} alt='Avatar' />
                <div className='nameContainer'>
                    <h3>{contact.name.first} {contact.name.last}</h3>
                </div>
            </article>
        </Link>
    )
}

export default Contact