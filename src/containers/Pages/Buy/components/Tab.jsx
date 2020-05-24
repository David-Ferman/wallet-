import React from 'react';

export default class Tab extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(event) {
        event.preventDefault();
        this.props.onClick(this.props.tabIndex);
    }

    render() {
        return (
            <li className="tab m-r">
                <button className={`button gastar-button text-button tab-link ${this.props.linkClassName} ${this.props.isActive ? 'active' : ''}`}
                   onClick={this.handleTabClick}>
                    {/*<i className={`tab-icon ${this.props.iconClassName}`}/>*/}
                    <p className="btn-tab">{this.props.buttonName}</p>
                </button>
            </li>
        );
    }
}

