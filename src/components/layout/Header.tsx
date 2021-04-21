import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

export const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todoist"/>
                </div>
                <div className="settings">
                    <ul>
                        <li data-testId="quick-add-task-action" className="settings__add">+</li>
                        <li data-testId="darkmode-action" className="settings__darkmode"><FaPizzaSlice/></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;