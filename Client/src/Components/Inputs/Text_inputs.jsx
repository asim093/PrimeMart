import React from 'react'
import styles from './Text_inputs.module.scss'


const Text_inputs = (props) => {
    return (
        <div>
            <div className={styles.input_container} style={props.styles}>
                <div className={styles.input_field}>
                    <input placeholder={props.placeholder} type={props.type} value={props.value} onChange={(e) => props.onChange(e.target.value)} />
                    {props.isIcon && <span>{props.isIcon}</span>}
                </div>
            </div>

            {props.required && <div><small className={styles.input_err}>{props.err_msg}</small></div>}
        </div>
    )
}

export default Text_inputs