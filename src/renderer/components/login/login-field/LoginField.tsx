import * as React from 'react'

import './LoginField.css'

type LoginFieldProps = {
    password: boolean,

}

export default class LoginField extends React.Component<LoginFieldProps> {

    getFieldSvg(): JSX.Element {
        if(this.props.password) {

            return (
                <>
                    <svg className="loginSVG" viewBox="40 32 60.36 70.43">
                        <g>
                            <path d="M86.16,54a16.38,16.38,0,1,0-32,0H44V102.7H96V54Zm-25.9-3.39a9.89,9.89,0,1,1,19.77,0A9.78,9.78,0,0,1,79.39,54H60.89A9.78,9.78,0,0,1,60.26,50.59ZM70,96.2a6.5,6.5,0,0,1-6.5-6.5,6.39,6.39,0,0,1,3.1-5.4V67h6.5V84.11a6.42,6.42,0,0,1,3.39,5.6A6.5,6.5,0,0,1,70,96.2Z"/>
                        </g>
                    </svg>
                </>
            )

        } else {

            return (
                <>
                    <svg className="loginSVG" viewBox="40 37 65.36 61.43">
                        <g>
                            <path d="M86.77,58.12A13.79,13.79,0,1,0,73,71.91,13.79,13.79,0,0,0,86.77,58.12M97,103.67a3.41,3.41,0,0,0,3.39-3.84,27.57,27.57,0,0,0-54.61,0,3.41,3.41,0,0,0,3.39,3.84Z"/>
                        </g>
                    </svg>
                </>
            )
            
        }
    }

    getDefaultErrorMessage(): string {
        if(this.props.password) {
            return '* Required'
        } else {
            return '* Invalid Value'
        }
    }

    getPlaceholder(): string {
        if(this.props.password) {
            return 'PASSWORD'
        } else {
            return 'EMAIL OR USERNAME'
        }
    }

    render() {
        return (
            <>
                <div className="loginFieldContainer">
                    {this.getFieldSvg()}
                    <span className="loginErrorSpan">{this.getDefaultErrorMessage()}</span>
                    <input className="loginField" type={this.props.password ? 'password' : 'text'} placeholder={this.getPlaceholder()}/>
                </div>
            </>
        )
    }

}