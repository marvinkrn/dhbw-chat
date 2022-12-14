import React from 'react'

function LoginModal(props) {

    return (props.trigger && (
        <div className='modal_overlay'>
            <div className="modal_inner">
                {props.children}
            </div>
        </div>
    ));

}

export default LoginModal