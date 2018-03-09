import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import FlatButton from 'material-ui/FlatButton';

interface SaveStatusProps {
    status: string;
    history?: any;
    error?: any;
}

@observer
class SaveStatus extends React.Component<SaveStatusProps, any> {

    constructor(props: SaveStatusProps) {
        super(props);
    }

    render() {
        if (this.props.status === 'success') {
            return (
                <div>
                    Success! You can now <FlatButton
                        label="visit our dashboard"
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        primary={true}
                        onClick={() => this.props.history.push('/')}
                    />
                </div>);
        } else if (this.props.status === 'failed') {
            return (
                <div>
                    Failed! {this.props.error}
                </div>);
        } else {
            return (
                <div />
            );
        }
    }
}

export default withRouter(SaveStatus);
