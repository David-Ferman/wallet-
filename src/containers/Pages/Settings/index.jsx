import React from 'react';
import { changeThemeToDark, changeThemeToLight } from "../../../redux/actions/themeActions";
import { connect } from "react-redux";

class SettingsPage extends React.Component {

    state = {
        checked: false
    };

    componentDidMount() {
        this.verifyTheme();
    }

    verifyTheme = ()=>{
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.checked = localStorage.getItem( 'theme' ) === 'theme-dark'
            ? this.setState( { checked: false } )
            : this.setState( { checked: true } );
    };


    changeToDark = () => {
        this.props.dispatch( changeThemeToDark() );
        localStorage.setItem( 'theme', 'theme-dark' );
    };

    changeToLight = () => {
        this.props.dispatch( changeThemeToLight() );
        localStorage.setItem( 'theme', 'theme-light' );
    };

    toggleSwitch = () => {
        this.setState( { checked: !this.state.checked } );
        if( this.state.checked ) {
            this.changeToDark();
        } else {
            this.changeToLight();
        }

        console.log( this.state.checked )
    };


    render() {
        return (


            <section className="hero settings-wrapper">
                <div className="hero-body ">
                    <div className="level">
                        <div className="level-left">
                            <h1>Theme Selection</h1>
                        </div>
                        <div className="level-right">
                            <label id="switch" className="switch">
                                <input type="checkbox" id="slider" onChange={this.toggleSwitch}
                                       checked={this.state.checked}/>
                                <span className="slider round"> </span>
                            </label>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}

/*export default withRouter( connect( state => ( {
    sidebar: state.sidebar,
} ) )( SettingsPage ) );*/
const mapsStateToProps=state=>({citas:state.theme.nombre })
export default connect(mapsStateToProps) (SettingsPage);
