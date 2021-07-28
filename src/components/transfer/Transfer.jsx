import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ADDCONTACTS } from '../../redux/ContactsSlice'
import Contact from './contact/Contact'

function Transfer() {

    const { contacts } = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    const fetchContactsList = async () => {
        if (contacts.length === 0) {
            const results = []
            let url = 'https://randomuser.me/api/?results=20&inc=name,picture,id'
     
            const res = await fetch(url)
            const data = await res.json()
            results.push(...data.results)

            dispatch(ADDCONTACTS(results))
        }
    }

    useEffect(() => fetchContactsList())

    return (
        <section className='contactsContainer'>
            <h1>Select the contact you wish to transfer to:</h1>
            {contacts.map((contact, i) => <Contact contact={contact} key={contact.name.first+contact.name.last} index={i} /> )}
        </section>
    )
}

export default Transfer
