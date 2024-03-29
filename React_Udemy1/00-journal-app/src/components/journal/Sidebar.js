import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startAddUser } from '../../actions/usuarios';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);
    const handleLogout = () => {
        dispatch(startLogout());
    }

    const handleAddUser = () => {
        dispatch(startAddUser());
    }
    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>

                <button
                    onClick={handleLogout}
                    className="btn">
                    Logout
                </button>
            </div>

            <div className="journal__new-entry"
                onClick={handleAddUser}>
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    Nuevo Usuario
                </p>
            </div>

            <JournalEntries />

        </aside>
    )
}
