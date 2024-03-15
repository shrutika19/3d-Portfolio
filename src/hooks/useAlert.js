import React from 'react'

const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' })

    const showAlert = ({ text, type = 'danger' }) => setAlert({
        show: true,
        text,
        type
    })

    const hideAlert = () => setAlert({
        show: false,
        text: '',
        type: 'danger'
    })

    //hokks does not return jsx , it return objects, array etc
    return (
        { alert, showAlert, hideAlert }
    )
}

export default useAlert